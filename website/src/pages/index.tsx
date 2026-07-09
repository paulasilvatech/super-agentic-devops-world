import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from '@site/src/components/animations/ScrollReveal';
import CountUp from '@site/src/components/animations/CountUp';

import styles from './index.module.css';

const progressDotWorldClasses = [
  styles.progressDotWorld1,
  styles.progressDotWorld2,
  styles.progressDotWorld3,
  styles.progressDotWorld4,
  styles.progressDotWorld5,
  styles.progressDotWorld6,
  styles.progressDotWorld7,
  styles.progressDotWorld8,
];

type HudItem = {
  label: string;
  value: string;
};

type FeatureItem = {
  img: string;
  title: string;
  desc: string;
};

type WorldItem = {
  img: string;
  name: string;
  theme: string;
  desc: string;
  link: string;
  levels: number;
  num: number;
};

type QuickLinkItem = {
  img: string;
  label: string;
  world: string;
  to: string;
};

type QuestModeItem = {
  img: string;
  badge: string;
  title: string;
  desc: string;
  to: string;
  cta: string;
};

type LearningStepItem = {
  step: string;
  title: string;
  desc: string;
};

type HomeCopy = {
  meta: {
    title: string;
    description: string;
  };
  hud: HudItem[];
  hero: {
    subtitle: string;
    questionBlockTitle: string;
    questionBlockLabel: string;
    messages: string[];
    typeLines: string[];
    primaryCta: string;
    secondaryCta: string;
    secondaryCtaTo: string;
    questLogTitle: string;
    questLogItems: string[];
  };
  stats: {
    worlds: string;
    levels: string;
    diagrams: string;
    terms: string;
    languages: string;
  };
  questModes: {
    title: string;
    intro: string;
    items: QuestModeItem[];
  };
  features: {
    title: string;
    intro: string;
    items: FeatureItem[];
  };
  learningLoop: {
    title: string;
    intro: string;
    items: LearningStepItem[];
  };
  story: {
    title: string;
    paragraphs: string[];
    quote: string;
    ending: string;
  };
  worldMap: {
    title: string;
    subtitle: string;
    worlds: WorldItem[];
    levelsLabel: string;
  };
  quickStart: {
    title: string;
    intro: string;
    links: QuickLinkItem[];
  };
  banner: {
    cta: string;
  };
};

const homeContent: Record<string, HomeCopy> = {
  en: {
    meta: {
      title: 'Press START to Learn',
      description: 'An immersive educational journey through Agentic DevOps with Super Mario World energy.',
    },
    hud: [
      { label: 'WORLDS', value: '8' },
      { label: 'LEVELS', value: '70+' },
      { label: 'POWER-UPS', value: '14' },
      { label: 'MODES', value: '3' },
      { label: 'LIVES', value: 'MADE FOR SOFIA' },
    ],
    hero: {
      subtitle: 'A real learning journey where every lesson feels like a level, every concept feels like a power-up, and every project feels like a boss battle.',
      questionBlockTitle: 'Hit me!',
      questionBlockLabel: 'Hit question block',
      messages: [
        '1UP! You unlocked a new skill!',
        'Coin collected! Learning streak continues!',
        'Star Power! You are ready for the next level!',
        'Fire Flower! Practice mode activated!',
        'Cape Feather! Time to explore deeper ideas!',
      ],
      typeLines: [
        'Play to understand real DevOps.',
        'Collect AI skills like power-ups.',
        'Turn each level into practical knowledge.',
      ],
      primaryCta: 'PRESS START',
      secondaryCta: 'SEE THE MAP',
      secondaryCtaTo: '#world-map',
      questLogTitle: 'Quest Log',
      questLogItems: [
        'Start as a beginner and learn one mechanic at a time.',
        'Unlock real-world concepts with beginner-friendly analogies.',
        'Finish with hands-on challenges that feel like boss fights.',
      ],
    },
    stats: {
      worlds: 'Worlds',
      levels: 'Levels',
      diagrams: 'SVG Diagrams',
      terms: 'Glossary Terms',
      languages: 'Languages',
    },
    questModes: {
      title: 'Choose Your Player Mode',
      intro: 'The homepage now guides the reader like a game: pick a route, understand the objective, and jump into the right challenge.',
      items: [
        {
          img: '/img/worlds/world-1.png',
          badge: 'Tutorial Mode',
          title: 'Guided Adventure',
          desc: 'Start at World 1-1 and move step by step if you want the full beginner journey.',
          to: '/docs/intro',
          cta: 'Start the tutorial',
        },
        {
          img: '/img/worlds/world-5.png',
          badge: 'Warp Zone',
          title: 'Jump to the Topic You Need',
          desc: 'Use the world map when you already know the basics and want a direct path to Copilot, Agents, RAG, or MCP.',
          to: '#world-map',
          cta: 'Open the world map',
        },
        {
          img: '/img/worlds/world-7.png',
          badge: 'Boss Battle',
          title: 'Practice With a Real Mission',
          desc: 'Go straight to the practical project when you want to learn by building something concrete.',
          to: '/docs/world-7/boss-practical-project',
          cta: 'Enter the boss fight',
        },
      ],
    },
    features: {
      title: 'Every Concept Has a Mario Equivalent',
      intro: "If you've ever played Mario, you already understand the rhythm of learning inside this project.",
      items: [
        { img: '/img/features/agents.png', title: 'Agents = Characters', desc: 'AI Agents are the playable characters of DevOps. They observe, think, plan, and act.' },
        { img: '/img/features/skills.png', title: 'Skills = Power-Ups', desc: 'Each new skill makes the agent more capable, just like a Fire Flower or Cape Feather changes the game.' },
        { img: '/img/features/instructions.png', title: 'Instructions = Rules', desc: 'Custom instructions are the rulebook that shapes how an agent behaves in every level.' },
        { img: '/img/features/hooks.png', title: 'Hooks = ? Blocks', desc: 'Hooks trigger actions at the right time. Hit the block and something important happens.' },
        { img: '/img/features/mcp.png', title: 'MCP = Warp Zones', desc: 'Model Context Protocol connects agents to external tools, like instantly teleporting to another system.' },
        { img: '/img/features/sdd.png', title: 'SDD = Blueprints', desc: 'Spec-Driven Development is like planning the castle before you place the first brick.' },
      ],
    },
    learningLoop: {
      title: 'How the Educational Game Loop Works',
      intro: 'Each level is designed to feel like a playable learning cycle instead of a static documentation page.',
      items: [
        { step: '1-1', title: 'Mission Briefing', desc: 'A level starts by telling you what problem you are about to solve in plain language.' },
        { step: '1-2', title: 'Collect the Power-Up', desc: 'You learn the key concept with a friendly analogy before any heavy technical detail appears.' },
        { step: '1-3', title: 'Test in the Level', desc: 'Examples, diagrams, and guided explanations help you see how the concept behaves in the real world.' },
        { step: '1-Boss', title: 'Beat the Boss', desc: 'Later levels and practical projects turn the lesson into action so the knowledge sticks.' },
      ],
    },
    story: {
      title: 'Made for Sofia',
      paragraphs: [
        'Sofia is my daughter. When she asked me to teach her about software development, I realized that most tutorials were not built for someone starting from absolute zero.',
        'So I decided to explain everything through Super Mario World — a game where the rules are simple, the progression is clear, and every challenge teaches you something new.',
      ],
      quote: '"Made for Sofia" is more than a subtitle. It is a promise that this guide explains real technology with patience, care, and beginner-friendly language.',
      ending: 'Every developer starts at World 1-1. Sofia did. And now, so can you.',
    },
    worldMap: {
      title: 'The World Map',
      subtitle: '8 worlds from beginner to advanced — choose your route and keep the learning momentum.',
      levelsLabel: 'Levels',
      worlds: [
        { img: '/img/worlds/world-1.png', name: 'World 1', theme: 'Green Plains', desc: 'VS Code, Git, GitHub, Actions, Azure', link: '/docs/world-1/1-1-vs-code', levels: 8, num: 1 },
        { img: '/img/worlds/world-2.png', name: 'World 2', theme: 'Underground', desc: 'APIs, Security, DNS, DevOps', link: '/docs/world-2/2-1-ambientes', levels: 8, num: 2 },
        { img: '/img/worlds/world-3.png', name: 'World 3', theme: 'Sky World', desc: 'Docker, Tests, Languages, Frameworks', link: '/docs/world-3/3-1-arvore_habilidades', levels: 12, num: 3 },
        { img: '/img/worlds/world-4.png', name: 'World 4', theme: 'Water World', desc: 'Auth, Architecture, Deploy, Cache', link: '/docs/world-4/4-1-auth', levels: 9, num: 4 },
        { img: '/img/worlds/world-5.png', name: 'World 5', theme: "Bowser's Castle 1", desc: 'Copilot, AI Agents, GHAS, SDD', link: '/docs/world-5/5-1_devops-evolution', levels: 11, num: 5 },
        { img: '/img/worlds/world-6.png', name: 'World 6', theme: "Bowser's Castle 2", desc: 'Skills, Hooks, MCP, Orchestration', link: '/docs/world-6/6-1-custom-agents', levels: 10, num: 6 },
        { img: '/img/worlds/world-7.png', name: 'World 7', theme: 'Star World', desc: 'RAG, LangChain, IDP/Backstage', link: '/docs/world-7/7-1-azure-ai-foundry', levels: 7, num: 7 },
        { img: '/img/worlds/world-8.png', name: 'World 8', theme: 'Final Castle', desc: 'Complete Picture, Glossary', link: '/docs/world-8/8-1-how-everything-connects', levels: 4, num: 8 },
      ],
    },
    quickStart: {
      title: 'Quick Start',
      intro: 'Already know the basics? Warp directly to the lesson you need right now.',
      links: [
        { img: '/img/features/copilot.png', label: 'GitHub Copilot', world: 'W5-3', to: '/docs/world-5/5-3_github-copilot' },
        { img: '/img/features/brain.png', label: 'What Is an AI Agent?', world: 'W5-4', to: '/docs/world-5/5-4_what-is-an-agent' },
        { img: '/img/features/books.png', label: 'RAG', world: 'W7-2', to: '/docs/world-7/7-2-rag' },
        { img: '/img/features/sdd.png', label: 'Spec-Driven Development', world: 'W5-10', to: '/docs/world-5/5-10_sdd' },
        { img: '/img/features/agents.png', label: 'Custom Agents', world: 'W6-1', to: '/docs/world-6/6-1-custom-agents' },
        { img: '/img/features/hooks.png', label: 'Hands-on Project', world: 'W7-Boss', to: '/docs/world-7/boss-practical-project' },
      ],
    },
    banner: {
      cta: 'START AT WORLD 1-1',
    },
  },
  'pt-BR': {
    meta: {
      title: 'Aperte START para Aprender',
      description: 'Uma jornada educacional imersiva sobre Agentic DevOps com energia de jogo e explicações claras.',
    },
    hud: [
      { label: 'MUNDOS', value: '8' },
      { label: 'FASES', value: '70+' },
      { label: 'POWER-UPS', value: '14' },
      { label: 'MODOS', value: '3' },
      { label: 'VIDAS', value: 'FEITO PARA SOFIA' },
    ],
    hero: {
      subtitle: 'Uma jornada real de aprendizado em que cada lição parece uma fase, cada conceito parece um power-up e cada projeto parece uma batalha contra o chefe.',
      questionBlockTitle: 'Bata aqui!',
      questionBlockLabel: 'Bater no bloco de interrogação',
      messages: [
        '1UP! Você desbloqueou uma nova habilidade!',
        'Moeda coletada! Sua sequência de aprendizado continua!',
        'Poder da estrela! Você está pronto para a próxima fase!',
        'Flor de fogo! O modo prática foi ativado!',
        'Pena da capa! Hora de explorar ideias mais profundas!',
      ],
      typeLines: [
        'Jogue para entender DevOps de verdade.',
        'Colete habilidades de IA como power-ups.',
        'Transforme cada fase em conhecimento prático.',
      ],
      primaryCta: 'APERTE START',
      secondaryCta: 'VER O MAPA',
      secondaryCtaTo: '#world-map',
      questLogTitle: 'Diário da Missão',
      questLogItems: [
        'Comece como iniciante e aprenda uma mecânica por vez.',
        'Desbloqueie conceitos reais com analogias fáceis de entender.',
        'Feche a jornada com desafios práticos que parecem batalhas de chefe.',
      ],
    },
    stats: {
      worlds: 'Mundos',
      levels: 'Fases',
      diagrams: 'Diagramas SVG',
      terms: 'Termos no Glossário',
      languages: 'Idiomas',
    },
    questModes: {
      title: 'Escolha Seu Modo de Jogo',
      intro: 'A página inicial agora guia a pessoa leitora como um jogo: escolha uma rota, entenda o objetivo e entre no desafio certo.',
      items: [
        {
          img: '/img/worlds/world-1.png',
          badge: 'Modo Tutorial',
          title: 'Aventura Guiada',
          desc: 'Comece no Mundo 1-1 e avance passo a passo se você quer a jornada completa para iniciantes.',
          to: '/docs/intro',
          cta: 'Começar o tutorial',
        },
        {
          img: '/img/worlds/world-5.png',
          badge: 'Zona de Atalho',
          title: 'Ir Direto ao Tema',
          desc: 'Use o mapa dos mundos quando você já conhece o básico e quer chegar direto em Copilot, Agentes, RAG ou MCP.',
          to: '#world-map',
          cta: 'Abrir o mapa dos mundos',
        },
        {
          img: '/img/worlds/world-7.png',
          badge: 'Batalha do Chefe',
          title: 'Praticar com uma Missão Real',
          desc: 'Vá direto para o projeto prático quando quiser aprender construindo algo concreto.',
          to: '/docs/world-7/boss-practical-project',
          cta: 'Entrar na luta do chefe',
        },
      ],
    },
    features: {
      title: 'Cada Conceito Tem um Equivalente no Mario',
      intro: 'Se você já jogou Mario, já conhece o ritmo de aprendizado que esta experiência quer entregar.',
      items: [
        { img: '/img/features/agents.png', title: 'Agentes = Personagens', desc: 'Agentes de IA são os personagens jogáveis do DevOps. Eles observam, pensam, planejam e agem.' },
        { img: '/img/features/skills.png', title: 'Skills = Power-Ups', desc: 'Cada nova skill deixa o agente mais capaz, como uma Flor de Fogo ou uma Capa mudando o jogo.' },
        { img: '/img/features/instructions.png', title: 'Instructions = Regras', desc: 'As instruções personalizadas são o livro de regras que define como o agente se comporta em cada fase.' },
        { img: '/img/features/hooks.png', title: 'Hooks = Blocos ?', desc: 'Hooks disparam ações no momento certo. Bata no bloco e algo importante acontece.' },
        { img: '/img/features/mcp.png', title: 'MCP = Zonas de Atalho', desc: 'Model Context Protocol conecta agentes a ferramentas externas, como teleportar para outro sistema.' },
        { img: '/img/features/sdd.png', title: 'SDD = Planta do Castelo', desc: 'Spec-Driven Development é como planejar o castelo antes de colocar o primeiro tijolo.' },
      ],
    },
    learningLoop: {
      title: 'Como Funciona o Loop Educativo do Jogo',
      intro: 'Cada fase foi desenhada para parecer um ciclo jogável de aprendizado, e não apenas uma página estática de documentação.',
      items: [
        { step: '1-1', title: 'Briefing da Missão', desc: 'A fase começa explicando, em linguagem simples, qual problema você vai aprender a resolver.' },
        { step: '1-2', title: 'Colete o Power-Up', desc: 'Você aprende a ideia principal com uma analogia amigável antes de encontrar detalhes mais pesados.' },
        { step: '1-3', title: 'Teste na Fase', desc: 'Exemplos, diagramas e explicações guiadas mostram como o conceito se comporta no mundo real.' },
        { step: '1-Chefe', title: 'Derrote o Chefe', desc: 'As fases avançadas e os projetos práticos transformam a lição em ação para fixar o conhecimento.' },
      ],
    },
    story: {
      title: 'Feito para Sofia',
      paragraphs: [
        'Sofia é minha filha. Quando ela me pediu para ensinar desenvolvimento de software, eu percebi que a maioria dos tutoriais não foi feita para quem está começando do absoluto zero.',
        'Então decidi explicar tudo com Super Mario World — um jogo em que as regras são simples, a progressão é clara e cada desafio ensina algo novo.',
      ],
      quote: '"Feito para Sofia" é mais do que um subtítulo. É a promessa de explicar tecnologia real com paciência, cuidado e linguagem acessível para iniciantes.',
      ending: 'Toda pessoa desenvolvedora começa no Mundo 1-1. Sofia começou. E agora você também pode começar.',
    },
    worldMap: {
      title: 'O Mapa dos Mundos',
      subtitle: '8 mundos do básico ao avançado — escolha sua rota e mantenha o ritmo do aprendizado.',
      levelsLabel: 'Fases',
      worlds: [
        { img: '/img/worlds/world-1.png', name: 'Mundo 1', theme: 'Planícies Verdes', desc: 'VS Code, Git, GitHub, Actions, Azure', link: '/docs/world-1/1-1-vs-code', levels: 8, num: 1 },
        { img: '/img/worlds/world-2.png', name: 'Mundo 2', theme: 'Subsolo', desc: 'APIs, Segurança, DNS, DevOps', link: '/docs/world-2/2-1-ambientes', levels: 8, num: 2 },
        { img: '/img/worlds/world-3.png', name: 'Mundo 3', theme: 'Mundo do Céu', desc: 'Docker, Testes, Linguagens, Frameworks', link: '/docs/world-3/3-1-arvore_habilidades', levels: 12, num: 3 },
        { img: '/img/worlds/world-4.png', name: 'Mundo 4', theme: 'Mundo Aquático', desc: 'Auth, Arquitetura, Deploy, Cache', link: '/docs/world-4/4-1-auth', levels: 9, num: 4 },
        { img: '/img/worlds/world-5.png', name: 'Mundo 5', theme: 'Castelo do Bowser 1', desc: 'Copilot, Agentes de IA, GHAS, SDD', link: '/docs/world-5/5-1_devops-evolution', levels: 11, num: 5 },
        { img: '/img/worlds/world-6.png', name: 'Mundo 6', theme: 'Castelo do Bowser 2', desc: 'Skills, Hooks, MCP, Orquestração', link: '/docs/world-6/6-1-custom-agents', levels: 10, num: 6 },
        { img: '/img/worlds/world-7.png', name: 'Mundo 7', theme: 'Mundo Estelar', desc: 'RAG, LangChain, IDP/Backstage', link: '/docs/world-7/7-1-azure-ai-foundry', levels: 7, num: 7 },
        { img: '/img/worlds/world-8.png', name: 'Mundo 8', theme: 'Castelo Final', desc: 'Visão Completa, Glossário', link: '/docs/world-8/8-1-how-everything-connects', levels: 4, num: 8 },
      ],
    },
    quickStart: {
      title: 'Começo Rápido',
      intro: 'Já conhece o básico? Use o atalho para ir direto à lição que você precisa agora.',
      links: [
        { img: '/img/features/copilot.png', label: 'GitHub Copilot', world: 'M5-3', to: '/docs/world-5/5-3_github-copilot' },
        { img: '/img/features/brain.png', label: 'O que é um Agente de IA?', world: 'M5-4', to: '/docs/world-5/5-4_what-is-an-agent' },
        { img: '/img/features/books.png', label: 'RAG', world: 'M7-2', to: '/docs/world-7/7-2-rag' },
        { img: '/img/features/sdd.png', label: 'Spec-Driven Development', world: 'M5-10', to: '/docs/world-5/5-10_sdd' },
        { img: '/img/features/agents.png', label: 'Agentes Personalizados', world: 'M6-1', to: '/docs/world-6/6-1-custom-agents' },
        { img: '/img/features/hooks.png', label: 'Projeto Prático', world: 'M7-Chefe', to: '/docs/world-7/boss-practical-project' },
      ],
    },
    banner: {
      cta: 'COMEÇAR NO MUNDO 1-1',
    },
  },
};

function PixelImg({ src, alt, size = 64 }: { src: string; alt: string; size?: number }) {
  const url = useBaseUrl(src);
  return (
    <img
      src={url}
      alt={alt}
      width={size}
      height={size}
      className={styles.pixelImage}
      loading="lazy"
    />
  );
}

function HUD({ items }: { items: HudItem[] }) {
  return (
    <div className="hud">
      {items.map((item) => (
        <div key={item.label} className="hud__item">
          <span className="hud__label">{item.label}</span>
          <span className="hud__value">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function QuestionBlock({
  onClick,
  hit,
  label,
  title,
}: {
  onClick: () => void;
  hit: boolean;
  label: string;
  title: string;
}) {
  return (
    <button
      type="button"
      className={`q-block ${styles.questionBlock} ${hit ? 'q-block--hit' : ''}`}
      onClick={onClick}
      title={title}
      aria-label={label}
    >
      {hit ? '' : '?'}
    </button>
  );
}

function Hero({ siteTitle, copy, hud }: { siteTitle: string; copy: HomeCopy['hero']; hud: HudItem[] }) {
  const [hits, setHits] = useState([false, false, false, false, false]);
  const [message, setMessage] = useState('');
  const typeSequence = copy.typeLines.flatMap((line) => [line, 1800]) as Array<string | number>;

  const hitBlock = useCallback((index: number) => {
    setHits((currentHits) => {
      if (currentHits[index]) {
        return currentHits;
      }

      const nextHits = [...currentHits];
      nextHits[index] = true;
      setMessage(copy.messages[index]);
      setTimeout(() => setMessage(''), 2000);
      return nextHits;
    });
  }, [copy.messages]);

  return (
    <header className="hero--game">
      <div className="cloud cloud--1">&#9729;</div>
      <div className="cloud cloud--2">&#9729;</div>
      <div className="cloud cloud--3">&#9729;</div>

      <div className="hero__content">
        <HUD items={hud} />

        <div className="question-blocks">
          {hits.map((hit, index) => (
            <QuestionBlock
              key={index}
              hit={hit}
              onClick={() => hitBlock(index)}
              label={copy.questionBlockLabel}
              title={copy.questionBlockTitle}
            />
          ))}
        </div>

        {message && <div className={styles.coinMessage}>{message}</div>}

        <div className={styles.heroMascot}>
          <PixelImg src="/img/ai-agent-mascot.png" alt="AI Agent mascot" size={120} />
        </div>

        <h1 className="hero__game-title">{siteTitle}</h1>
        <p className="hero__game-subtitle">{copy.subtitle}</p>

        <TypeAnimation
          sequence={typeSequence}
          wrapper="p"
          repeat={Infinity}
          className={styles.heroTypeLine}
        />

        <div className={styles.heroCtaGroup}>
          <Link className="btn-start" to="/docs/intro">
            {copy.primaryCta}
          </Link>
          <a className={`btn-start ${styles.secondaryButton}`} href={copy.secondaryCtaTo}>
            {copy.secondaryCta}
          </a>
        </div>

        <div className={styles.questLog}>
          <span className={styles.questLogTitle}>{copy.questLogTitle}</span>
          <ul className={styles.questLogList}>
            {copy.questLogItems.map((item) => (
              <li key={item} className={styles.questLogItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

function Stats({ copy }: { copy: HomeCopy['stats'] }) {
  const items = [
    { num: 8, suffix: '', label: copy.worlds },
    { num: 70, suffix: '+', label: copy.levels },
    { num: 14, suffix: '', label: copy.diagrams },
    { num: 124, suffix: '+', label: copy.terms },
    { num: 2, suffix: '', label: copy.languages },
  ];

  return (
    <section className="stats-row">
      {items.map((item, index) => (
        <ScrollReveal key={item.label} delay={index * 0.1}>
          <div className="stat">
            <span className="stat__number">
              <CountUp end={item.num} suffix={item.suffix} />
            </span>
            <span className="stat__label">{item.label}</span>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}

function QuestModes({ copy }: { copy: HomeCopy['questModes'] }) {
  return (
    <section className={styles.questSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitleTight}>
          {copy.title}
        </Heading>
        <p className={styles.sectionIntro}>{copy.intro}</p>

        <div className={styles.questGrid}>
          {copy.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
                {item.to.startsWith('#') ? (
                  <a href={item.to} className={styles.questCard}>
                    <span className={styles.questBadge}>{item.badge}</span>
                    <PixelImg src={item.img} alt={item.title} size={72} />
                    <Heading as="h3" className={styles.questCardTitle}>
                      {item.title}
                    </Heading>
                    <p className={styles.questCardDescription}>{item.desc}</p>
                    <span className={styles.questCardCta}>{item.cta}</span>
                  </a>
                ) : (
                  <Link to={item.to} className={styles.questCard}>
                    <span className={styles.questBadge}>{item.badge}</span>
                    <PixelImg src={item.img} alt={item.title} size={72} />
                    <Heading as="h3" className={styles.questCardTitle}>
                      {item.title}
                    </Heading>
                    <p className={styles.questCardDescription}>{item.desc}</p>
                    <span className={styles.questCardCta}>{item.cta}</span>
                  </Link>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ copy }: { copy: HomeCopy['features'] }) {
  return (
    <section className="features-section">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitleTight}>
          {copy.title}
        </Heading>
        <p className={styles.sectionIntro}>{copy.intro}</p>
        <div className="row">
          {copy.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className={`col col--12 ${styles.featureColumn}`}>
                <div className="feature-block">
                  <div className="feature-block__icon">
                    <PixelImg src={item.img} alt={item.title} size={80} />
                  </div>
                  <div className="feature-block__title">{item.title}</div>
                  <p className="feature-block__desc">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningLoop({ copy }: { copy: HomeCopy['learningLoop'] }) {
  return (
    <section className={styles.learningLoopSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitleTight}>
          {copy.title}
        </Heading>
        <p className={styles.sectionIntro}>{copy.intro}</p>

        <div className={styles.learningLoopGrid}>
          {copy.items.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 0.08}>
              <article className={styles.learningCard}>
                <span className={styles.learningStep}>{item.step}</span>
                <Heading as="h3" className={styles.learningTitle}>
                  {item.title}
                </Heading>
                <p className={styles.learningDescription}>{item.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story({ copy }: { copy: HomeCopy['story'] }) {
  return (
    <section className="story">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {copy.title}
        </Heading>
        <div className="story__content">
         {copy.paragraphs.map((paragraph, index) => (
           <p key={index}>{paragraph}</p>
          ))}
          <blockquote>
            <p>
              <strong>{copy.quote}</strong>
            </p>
            <p>
              <em>{copy.ending}</em>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function WorldMap({ copy }: { copy: HomeCopy['worldMap'] }) {
  const [hoveredWorld, setHoveredWorld] = useState<number | null>(null);

  return (
    <section className="world-map" id="world-map">
      <div className="container">
        <Heading as="h2" className="world-map__title">
          {copy.title}
        </Heading>
        <p className="world-map__subtitle">{copy.subtitle}</p>

        <div className={styles.progressBar}>
          <div className={styles.progressTrack}>
            {copy.worlds.map((world) => (
              <div
                key={world.num}
                className={`${styles.progressDot} ${progressDotWorldClasses[world.num - 1]} ${hoveredWorld === world.num ? styles.progressDotActive : ''}`}
                title={world.theme}
              />
            ))}
          </div>
        </div>

        <div className="row world-path">
          {copy.worlds.map((world) => (
            <div key={world.num} className={`col col--3 ${styles.worldColumn}`}>
              <Link
                to={world.link}
                className={styles.worldCardLink}
                onMouseEnter={() => setHoveredWorld(world.num)}
                onMouseLeave={() => setHoveredWorld(null)}
              >
                <div className={`world-card world-card--${world.num}`}>
                  <div className="world-card__emoji">
                    <PixelImg src={world.img} alt={world.theme} size={72} />
                  </div>
                  <Heading as="h3" className="world-card__name">
                    {world.name}
                  </Heading>
                  <p className="world-card__theme">{world.theme}</p>
                  <p className="world-card__desc">{world.desc}</p>
                  <div className={styles.worldLevels}>
                    <span className="world-card__levels">
                      {world.levels} {copy.levelsLabel}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart({ copy }: { copy: HomeCopy['quickStart'] }) {
  return (
    <section className="quickstart">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitleTight}>
          {copy.title}
        </Heading>
        <p className={styles.sectionIntroCompact}>{copy.intro}</p>

        <div className={`pipe-divider ${styles.pipeDividerSpaced}`}>
          <div className="pipe-divider__pipe" />
        </div>

        <div className={`row ${styles.centeredRow}`}>
          <div className="col col--6">
            {copy.links.map((link, index) => (
              <Link key={index} to={link.to} className="pipe-link">
                <span className="pipe-link__icon">
                  <PixelImg src={link.img} alt={link.label} size={32} />
                </span>
                <span className="pipe-link__label">{link.label}</span>
                <span className="pipe-link__world">{link.world}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Banner({ copy }: { copy: HomeCopy['banner'] }) {
  const bannerSrc = useBaseUrl('/img/super-agentic-devops-world-banner.jpeg');
  return (
    <section className="banner-section">
      <div className="container">
        <img
          src={bannerSrc}
          alt="Super Agentic DevOps World — Made for Sofia"
          className={`banner-image ${styles.bannerImage}`}
          loading="lazy"
        />
        <div className={styles.bannerCta}>
          <Link className="btn-start btn-green" to="/docs/intro">
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const copy = homeContent[i18n.currentLocale] || homeContent.en;

  return (
    <Layout title={copy.meta.title} description={copy.meta.description}>
      <Hero siteTitle={siteConfig.title} copy={copy.hero} hud={copy.hud} />
      <main>
        <Stats copy={copy.stats} />
        <QuestModes copy={copy.questModes} />
        <Features copy={copy.features} />
        <LearningLoop copy={copy.learningLoop} />
        <Story copy={copy.story} />
        <WorldMap copy={copy.worldMap} />
        <QuickStart copy={copy.quickStart} />
        <Banner copy={copy.banner} />
      </main>
    </Layout>
  );
}
