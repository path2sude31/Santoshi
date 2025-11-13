import { Story, GenerateStoryParams, StoryPanel } from './types';
import { DEMO_STORY, MOCK_AVATARS, MOCK_GUIDES } from './mockData';

const generatedStories: Story[] = [DEMO_STORY];

const generatePanels = (topicId: string, avatarId: string, guideId: string): StoryPanel[] => {
  const avatar = MOCK_AVATARS.find(a => a.id === avatarId);
  const guide = MOCK_GUIDES.find(g => g.id === guideId);

  const topicPanels: Record<string, StoryPanel[]> = {
    photosynthesis: [
      { panelNumber: 1, imageUrl: '/story-panels/photo-1.jpg', caption: `${avatar?.name} finds a glowing leaf in the garden.` },
      { panelNumber: 2, imageUrl: '/story-panels/photo-2.jpg', caption: `${guide?.name} appears to explain nature's solar panels.` },
      { panelNumber: 3, imageUrl: '/story-panels/photo-3.jpg', caption: `Inside the leaf, chloroplasts capture sunlight energy.` },
      { panelNumber: 4, imageUrl: '/story-panels/photo-4.jpg', caption: `Water and CO2 combine to make glucose - plant food!` },
      { panelNumber: 5, imageUrl: '/story-panels/photo-5.jpg', caption: `Oxygen is released as a byproduct for us to breathe.` },
      { panelNumber: 6, imageUrl: '/story-panels/photo-6.jpg', caption: `${avatar?.name} understands how plants feed the world.` },
    ],
    'solar-system': [
      { panelNumber: 1, imageUrl: '/story-panels/solar-1.jpg', caption: `${avatar?.name} looks up at the stars with wonder.` },
      { panelNumber: 2, imageUrl: '/story-panels/solar-2.jpg', caption: `${guide?.name} takes them on a journey through space.` },
      { panelNumber: 3, imageUrl: '/story-panels/solar-3.jpg', caption: `They visit Mercury, the closest planet to the Sun.` },
      { panelNumber: 4, imageUrl: '/story-panels/solar-4.jpg', caption: `Jupiter's Great Red Spot is a storm bigger than Earth!` },
      { panelNumber: 5, imageUrl: '/story-panels/solar-5.jpg', caption: `Saturn's beautiful rings are made of ice and rock.` },
      { panelNumber: 6, imageUrl: '/story-panels/solar-6.jpg', caption: `${avatar?.name} returns home with cosmic knowledge.` },
    ],
    default: [
      { panelNumber: 1, imageUrl: '/story-panels/default-1.jpg', caption: `${avatar?.name} begins a new science adventure.` },
      { panelNumber: 2, imageUrl: '/story-panels/default-2.jpg', caption: `${guide?.name} guides them through discovery.` },
      { panelNumber: 3, imageUrl: '/story-panels/default-3.jpg', caption: `They observe amazing natural phenomena.` },
      { panelNumber: 4, imageUrl: '/story-panels/default-4.jpg', caption: `Experiments reveal hidden scientific truths.` },
      { panelNumber: 5, imageUrl: '/story-panels/default-5.jpg', caption: `Understanding grows with each discovery.` },
      { panelNumber: 6, imageUrl: '/story-panels/default-6.jpg', caption: `${avatar?.name} becomes a true science hero!` },
    ]
  };

  return topicPanels[topicId] || topicPanels.default;
};

export const mockStoryService = {
  generateStory: async (params: GenerateStoryParams): Promise<Story> => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const storyId = `story-${Date.now()}`;
    const story: Story = {
      id: storyId,
      title: `${params.avatarId}'s ${params.topicId} Adventure`,
      childId: params.childId,
      topicId: params.topicId,
      avatarId: params.avatarId,
      guideId: params.guideId,
      panels: generatePanels(params.topicId, params.avatarId, params.guideId),
      status: 'ready',
      createdAt: new Date()
    };

    generatedStories.push(story);
    return story;
  },

  getStoryById: (id: string): Story | undefined => {
    return generatedStories.find(s => s.id === id);
  },

  getStoriesByChild: (childId: string): Story[] => {
    return generatedStories.filter(s => s.childId === childId);
  },

  getAllStories: (): Story[] => {
    return generatedStories;
  }
};
