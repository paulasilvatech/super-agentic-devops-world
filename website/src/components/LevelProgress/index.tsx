import {useEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

/**
 * LevelProgress — a gamified reading-progress HUD shown on every doc page.
 *
 * It turns the act of reading a "level" into a Super Mario World run: a coin
 * runs along a track towards a flagpole as the reader scrolls, and a
 * "LEVEL CLEAR!" celebration fires once the bottom of the page is reached.
 *
 * The bar inherits the active world's accent colour through
 * `--ifm-color-primary`, which is already themed per world in custom.css.
 */
export default function LevelProgress(): React.ReactElement {
  const location = useLocation();
  const {i18n} = useDocusaurusContext();
  const [progress, setProgress] = useState(0);
  const [cleared, setCleared] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const clearedRef = useRef(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset state whenever the reader warps to a new level (route change).
    clearedRef.current = false;
    setCleared(false);
    setShowToast(false);
    setProgress(0);

    let frame = 0;

    const compute = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? scrollTop / scrollable : 1;
      const pct = Math.min(100, Math.max(0, Math.round(ratio * 100)));
      setProgress(pct);

      if (pct >= 98 && !clearedRef.current) {
        clearedRef.current = true;
        setCleared(true);
        setShowToast(true);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setShowToast(false), 3200);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, [location.pathname]);

  // Game HUD text ("LEVEL", "LEVEL CLEAR!") stays in English on both locales,
  // matching the site's brand convention (e.g. "PRESS START", "1UP!").
  // Only the accessibility label is localized for screen-reader users.
  const clearLabel = 'LEVEL CLEAR!';
  const barLabel =
    i18n.currentLocale === 'pt-BR'
      ? 'Progresso de leitura do nível'
      : 'Level reading progress';

  return (
    <>
      <div
        className={styles.hud}
        role="progressbar"
        aria-label={barLabel}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}>
        <span className={styles.hudLabel} aria-hidden="true">
          LEVEL
        </span>
        <div className={styles.track}>
          <div className={styles.fill} style={{width: `${progress}%`}} />
          <span
            className={`${styles.runner} ${cleared ? styles.runnerCleared : ''}`}
            style={{left: `${progress}%`}}
            aria-hidden="true">
            {cleared ? '⭐' : '🪙'}
          </span>
          <span
            className={`${styles.flag} ${cleared ? styles.flagRaised : ''}`}
            aria-hidden="true">
            {cleared ? '🏁' : '⛳'}
          </span>
        </div>
        <span className={styles.count} aria-hidden="true">
          {progress}%
        </span>
      </div>

      {showToast && (
        <div className={styles.toast} role="status">
          <span className={styles.toastIcon} aria-hidden="true">
            🏆
          </span>
          <span className={styles.toastText}>{clearLabel}</span>
        </div>
      )}
    </>
  );
}
