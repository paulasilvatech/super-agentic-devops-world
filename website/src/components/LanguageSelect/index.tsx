import { useCallback, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const STORAGE_KEY = 'sadw-language-selected';

type LanguageOption = {
  /** Docusaurus locale code, e.g. "en", "pt-BR", "es". */
  locale: string;
  /** Short badge shown on the card (kept language-neutral). */
  code: string;
  /** Native language name. */
  nativeName: string;
  /** Native "start the adventure" call to action. */
  cta: string;
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { locale: 'en', code: 'EN', nativeName: 'English', cta: 'Press Start' },
  { locale: 'pt-BR', code: 'PT-BR', nativeName: 'Português', cta: 'Começar' },
  { locale: 'es', code: 'ES', nativeName: 'Español', cta: 'Empezar' },
];

/**
 * Builds the base path for a locale, respecting Docusaurus' default-locale
 * convention (the default locale has no path segment).
 */
function localeBasePath(baseUrl: string, locale: string, defaultLocale: string): string {
  return locale === defaultLocale ? baseUrl : `${baseUrl}${locale}/`;
}

/**
 * A game-styled "Select Your Adventure Language" start screen.
 *
 * On the visitor's first arrival it appears as an overlay so they can choose
 * the language they want to learn in (EN, PT-BR, ES). The choice is remembered
 * in `localStorage`, so returning visitors are not interrupted again.
 */
export default function LanguageSelect(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { currentLocale, defaultLocale } = i18n;
  const { baseUrl } = siteConfig;

  const [visible, setVisible] = useState(false);

  // Only decide visibility on the client to avoid SSR/hydration mismatches.
  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage may be unavailable (private mode); fail open silently.
    }
  }, []);

  const remember = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors — selection still works for this session.
    }
  }, []);

  const dismiss = useCallback(() => {
    remember();
    setVisible(false);
  }, [remember]);

  const choose = useCallback(
    (locale: string) => {
      remember();
      if (locale === currentLocale) {
        setVisible(false);
        return;
      }
      // Cross-locale navigation needs a full page load to a different base path.
      window.location.href = `${localeBasePath(baseUrl, locale, defaultLocale)}docs/intro`;
    },
    [baseUrl, currentLocale, defaultLocale, remember],
  );

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!visible) {
      return undefined;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dismiss();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [visible, dismiss]);

  if (!visible) {
    return null;
  }

  const title = translate({
    id: 'homepage.languageSelect.title',
    message: 'Select Your Language',
    description: 'Heading of the language selection start screen',
  });
  const subtitle = translate({
    id: 'homepage.languageSelect.subtitle',
    message: 'Choose the language to start your adventure',
    description: 'Subtitle of the language selection start screen',
  });
  const skipLabel = translate({
    id: 'homepage.languageSelect.skip',
    message: 'Continue in current language',
    description: 'Label for skipping the language selection screen',
  });
  const dialogLabel = translate({
    id: 'homepage.languageSelect.ariaLabel',
    message: 'Language selection',
    description: 'Accessible label for the language selection dialog',
  });

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={dialogLabel}>
      <div className={styles.screen}>
        <p className={styles.blink}>&#9650; PLAYER SELECT &#9650;</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.options}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.locale}
              type="button"
              className={`${styles.card} ${option.locale === currentLocale ? styles.cardActive : ''}`}
              onClick={() => choose(option.locale)}
              aria-label={`${option.nativeName} — ${option.cta}`}
            >
              <span className={styles.badge}>{option.code}</span>
              <span className={styles.name}>{option.nativeName}</span>
              <span className={styles.cta}>{option.cta} &#9654;</span>
            </button>
          ))}
        </div>

        <button type="button" className={styles.skip} onClick={dismiss}>
          {skipLabel}
        </button>
      </div>
    </div>
  );
}
