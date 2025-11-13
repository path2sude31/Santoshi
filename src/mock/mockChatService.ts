import { ChatMessage } from './types';

const UNSAFE_KEYWORDS = ['address', 'password', 'location', 'phone', 'hurt', 'kill', 'weapon'];

const responses: Record<string, string> = {
  'photosynthesis': 'Plants use chlorophyll to capture sunlight and turn it into energy. They take in carbon dioxide and water, and make glucose (food) and oxygen!',
  'chloroplast': 'Chloroplasts are like tiny solar panels inside plant cells. They contain chlorophyll, which captures sunlight.',
  'oxygen': 'Plants release oxygen as a byproduct of photosynthesis. That\'s the air we breathe! One large tree can provide oxygen for two people.',
  'solar': 'Our solar system has 8 planets orbiting the Sun. The Sun is a star that provides light and warmth to all the planets.',
  'planet': 'Planets are large objects that orbit stars. They don\'t make their own light but reflect light from the Sun.',
  'water': 'Water is essential for life! It exists in three states: solid (ice), liquid (water), and gas (water vapor).',
  default: 'That\'s a great question! Science is all about curiosity. Let me help you explore this topic further.'
};

export const mockChatService = {
  askQuestion: async (params: { storyId?: string; topicId?: string; question: string }): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const lowerQuestion = params.question.toLowerCase();

    for (const keyword of UNSAFE_KEYWORDS) {
      if (lowerQuestion.includes(keyword)) {
        return "I'm here to talk about science adventures! Let's explore plants, space, energy, or other amazing topics instead.";
      }
    }

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(keyword)) {
        return response;
      }
    }

    return responses.default;
  },

  getSuggestedQuestions: (topicId: string): string[] => {
    const suggestions: Record<string, string[]> = {
      photosynthesis: [
        'Why are leaves green?',
        'How do plants make food?',
        'What is chlorophyll?',
        'Do all plants do photosynthesis?'
      ],
      'solar-system': [
        'How many planets are there?',
        'Why is Mars red?',
        'What are Saturn\'s rings made of?',
        'How big is the Sun?'
      ],
      'water-cycle': [
        'Where does rain come from?',
        'What is evaporation?',
        'How do clouds form?',
        'Why is water important?'
      ],
      default: [
        'Tell me something interesting!',
        'How does this work?',
        'Why is this important?',
        'What else can I learn?'
      ]
    };

    return suggestions[topicId] || suggestions.default;
  }
};
