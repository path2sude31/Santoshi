import { Avatar, Guide, Topic, Badge, Child, Story } from './types';

export const MOCK_AVATARS: Avatar[] = [
  { id: 'stella', name: 'Stella Flora', imageUrl: '/avatars/stella.png', description: 'Plant explorer' },
  { id: 'max', name: 'Max Neutron', imageUrl: '/avatars/max.png', description: 'Physics enthusiast' },
  { id: 'ruby', name: 'Ruby Reactor', imageUrl: '/avatars/ruby.png', description: 'Chemistry whiz' },
  { id: 'finn', name: 'Finn Wave', imageUrl: '/avatars/finn.png', description: 'Ocean adventurer' },
  { id: 'leo', name: 'Leo Light', imageUrl: '/avatars/leo.png', description: 'Astronomy fan' },
  { id: 'echo', name: 'Echo Sound', imageUrl: '/avatars/echo.png', description: 'Music scientist' },
  { id: 'bolt', name: 'Bolt Charge', imageUrl: '/avatars/bolt.png', description: 'Energy expert' },
  { id: 'kira', name: 'Kira Code', imageUrl: '/avatars/kira.png', description: 'Tech genius' },
  { id: 'rex', name: 'Rex Explorer', imageUrl: '/avatars/rex.png', description: 'Dinosaur detective' },
];

export const MOCK_GUIDES: Guide[] = [
  {
    id: 'mr-chloro',
    name: 'Mr. Chloro',
    imageUrl: '/guides/chloro.png',
    persona: 'A wise plant wizard who teaches about photosynthesis and plant life',
    specialty: 'Plants & Biology'
  },
  {
    id: 'dr-nova',
    name: 'Dr. Nova',
    imageUrl: '/guides/nova.png',
    persona: 'An energetic astronomer who explores space and stars',
    specialty: 'Astronomy & Space'
  },
  {
    id: 'prof-atom',
    name: 'Prof. Atom',
    imageUrl: '/guides/atom.png',
    persona: 'A curious chemist who reveals the secrets of matter',
    specialty: 'Chemistry & Physics'
  },
  {
    id: 'captain-wave',
    name: 'Captain Wave',
    imageUrl: '/guides/wave.png',
    persona: 'A friendly oceanographer who dives into water science',
    specialty: 'Oceans & Water'
  },
];

export const MOCK_TOPICS: Topic[] = [
  {
    id: 'photosynthesis',
    name: 'Photosynthesis',
    description: 'How plants make food from sunlight',
    gradeBands: ['K-2', '3-5', '6-8'],
    category: 'Biology'
  },
  {
    id: 'solar-system',
    name: 'Solar System',
    description: 'Explore planets, moons, and stars',
    gradeBands: ['K-2', '3-5', '6-8'],
    category: 'Astronomy'
  },
  {
    id: 'water-cycle',
    name: 'Water Cycle',
    description: 'Journey of water on Earth',
    gradeBands: ['K-2', '3-5'],
    category: 'Earth Science'
  },
  {
    id: 'electricity',
    name: 'Electricity',
    description: 'How electrical energy works',
    gradeBands: ['3-5', '6-8'],
    category: 'Physics'
  },
  {
    id: 'ecosystems',
    name: 'Ecosystems',
    description: 'Living things and their environments',
    gradeBands: ['3-5', '6-8'],
    category: 'Biology'
  },
  {
    id: 'states-of-matter',
    name: 'States of Matter',
    description: 'Solids, liquids, and gases',
    gradeBands: ['K-2', '3-5'],
    category: 'Chemistry'
  },
];

export const MOCK_BADGES: Badge[] = [
  {
    id: 'curious-mind',
    name: 'Curious Mind',
    description: 'Asked 5 great questions',
    imageUrl: '/badges/curious.png',
    unlocked: false
  },
  {
    id: 'story-reader',
    name: 'Story Reader',
    description: 'Completed first story',
    imageUrl: '/badges/reader.png',
    unlocked: false
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Scored 100% on a quiz',
    imageUrl: '/badges/quiz.png',
    unlocked: false
  },
  {
    id: 'science-explorer',
    name: 'Science Explorer',
    description: 'Explored 3 different topics',
    imageUrl: '/badges/explorer.png',
    unlocked: false
  },
];

export const MOCK_CHILDREN: Child[] = [
  {
    id: 'child-1',
    name: 'Emma',
    grade: '3',
    avatarId: 'stella',
    parentId: 'parent-1'
  },
  {
    id: 'child-2',
    name: 'Noah',
    grade: '5',
    avatarId: 'max',
    parentId: 'parent-1'
  },
];

export const DEMO_STORY: Story = {
  id: 'demo-1',
  title: 'Stella\'s Photosynthesis Adventure',
  childId: 'child-1',
  topicId: 'photosynthesis',
  avatarId: 'stella',
  guideId: 'mr-chloro',
  status: 'ready',
  createdAt: new Date(),
  panels: [
    {
      panelNumber: 1,
      imageUrl: '/story-panels/demo-1.jpg',
      caption: 'Stella Flora discovers a mysterious glowing leaf in her backyard.'
    },
    {
      panelNumber: 2,
      imageUrl: '/story-panels/demo-2.jpg',
      caption: 'Mr. Chloro appears and explains that plants are nature\'s solar panels!'
    },
    {
      panelNumber: 3,
      imageUrl: '/story-panels/demo-3.jpg',
      caption: 'Stella shrinks down to see chloroplasts capturing sunlight inside the leaf.'
    },
    {
      panelNumber: 4,
      imageUrl: '/story-panels/demo-4.jpg',
      caption: 'She watches as water and carbon dioxide combine to make food for the plant.'
    },
    {
      panelNumber: 5,
      imageUrl: '/story-panels/demo-5.jpg',
      caption: 'Oxygen bubbles are released as a gift to all living things!'
    },
    {
      panelNumber: 6,
      imageUrl: '/story-panels/demo-6.jpg',
      caption: 'Stella returns to normal size, amazed by the magic of photosynthesis.'
    },
  ]
};
