export const projects = [
  {
    id: 'propvault',
    title: 'PropVault',
    subtitle: 'Estate Management Platform',
    summary: 'A multi-module Android platform that unifies admin workflows, tenant support, and property analytics under a clean MVVM architecture.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Clean Architecture', 'MVVM'],
    architecture: [
      'Modular feature domains for admin, customer, and inventory workflows.',
      'Realtime data sync backed by Firebase with offline-first caching.',
      'Role-based access rules enforced at the data layer.'
    ],
    repository: 'https://github.com/prafullKrRj/PropVault'
  },
  {
    id: 'trainx',
    title: 'TrainX',
    subtitle: 'Smart Workout Companion',
    summary: 'A personalized fitness tracker that blends offline-first storage with AI-driven coaching for adaptive training plans.',
    stack: ['Kotlin', 'Room DB', 'Jetpack Compose', 'Gemini AI', 'MVVM'],
    architecture: [
      'Room-powered local storage for resilient offline sessions.',
      'AI recommendation layer that adapts programs based on progress signals.',
      'Composable UI surface for real-time plan adjustments.'
    ],
    repository: 'https://github.com/prafullKrRj/TrainX'
  },
  {
    id: 'algoaura',
    title: 'AlgoAura',
    subtitle: 'Competitive Programming Studio',
    summary: 'A focused practice hub for algorithmic training with curated problem sets, progress analytics, and revision workflows.',
    stack: ['Python', 'Django', 'PostgreSQL', 'React', 'REST APIs'],
    architecture: [
      'Django REST backend with token-based session management.',
      'PostgreSQL persistence for submissions, notes, and revision metadata.',
      'Analytics service that aggregates streaks and topic mastery.'
    ],
    repository: 'https://github.com/prafullKrRj/AlgoAura'
  },
  {
    id: 'cuesight',
    title: 'CueSight',
    subtitle: 'Assistive Social Intelligence',
    summary: 'A privacy-first assistive tech concept that interprets social cues using on-device ML and adaptive feedback loops.',
    stack: ['Android', 'MediaPipe', 'Bluetooth', 'On-device ML', 'Chart.js'],
    architecture: [
      'Edge-first processing pipeline that keeps sensitive video data local.',
      'Lightweight wearable capture module streaming to a mobile inference layer.',
      'Analytics dashboard translating emotion signals into coaching insights.'
    ],
    repository: 'https://github.com/prafullKrRj/CueSight'
  }
];
