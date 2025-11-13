# SciQuest Heroes MVP Shell

A complete React + TypeScript MVP shell demonstrating the SciQuest Heroes platform structure with simulated authentication and mock data services.

## Features

### Simulated Authentication
- In-memory authentication with role switching (Parent, Child, Teacher)
- No backend required - uses localStorage for persistence
- Dev controls (top-right switcher) for easy role testing

### Mock Services
All AI/backend functionality is simulated:
- **Story Generation**: Creates 6-9 panel stories with placeholder content
- **Quiz System**: MCQ quizzes with scoring and badge unlocking
- **Chat Interface**: Question/answer system with topic suggestions
- **PDF Generation**: Simulated PDF download links

### Areas

#### Public Routes
- Landing page with hero section and sample story carousel
- How It Works, Topics, Pricing, About pages
- Authentication pages (login/signup - simulated)

#### Parent Dashboard (`/parent`)
- Overview with children count, stories, quiz stats
- Children management (add/view children)
- Child detail pages with stories and quiz results
- Progress tracking with mock charts
- Report generation (stub)

#### Child Dashboard (`/child`)
- Story creation wizard (avatar → guide → topic selection)
- Comic reader with panel navigation
- Quiz runner with scoring and badge rewards
- Chat interface with suggested questions
- Badge wall (locked/unlocked)
- Settings (language, font size, narration speed)

#### Teacher Dashboard (`/teacher`)
- Class management (2 mock classes)
- Assignment tracking (3 mock assignments)
- Topic library
- Reports (stub)

## Tech Stack

- **React 19** + **TypeScript**
- **React Router 7** for routing
- **Tailwind CSS 4** for styling
- **Vite 5** for build tooling

## Project Structure

```
src/
├── mock/              # Mock data and services
│   ├── types.ts       # TypeScript interfaces
│   ├── mockData.ts    # Static mock data
│   ├── mockStoryService.ts
│   ├── mockQuizService.ts
│   ├── mockChatService.ts
│   └── mockPdfService.ts
├── context/
│   └── AuthContext.tsx  # Simulated auth
├── components/        # Shared UI components
│   ├── RequireRole.tsx
│   ├── RoleSwitcher.tsx
│   ├── LoadingState.tsx
│   ├── EmptyState.tsx
│   └── ErrorState.tsx
├── layouts/           # Layout wrappers
│   ├── PublicLayout.tsx
│   ├── ParentLayout.tsx
│   ├── ChildLayout.tsx
│   └── TeacherLayout.tsx
├── routes/            # Page components
│   ├── Landing.tsx
│   ├── Login.tsx
│   ├── SimplePages.tsx
│   ├── parent/        # Parent area pages
│   ├── child/         # Child area pages
│   └── teacher/       # Teacher area pages
├── App.tsx            # Main app with routing
└── main.tsx           # Entry point
```

## Running the MVP

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing the MVP

1. **Start the app**: Visit `http://localhost:3000`
2. **Use Role Switcher**: Top-right controls to switch between roles
3. **Test User Flows**:
   - **Child**: Create story → Read panels → Take quiz → Chat
   - **Parent**: View children → See stories → Check progress
   - **Teacher**: Manage classes → Create assignments

## Key Mock Data

### Avatars (9)
Stella, Max, Ruby, Finn, Leo, Echo, Bolt, Kira, Rex

### Guides (4)
Mr. Chloro (Plants), Dr. Nova (Space), Prof. Atom (Chemistry), Captain Wave (Oceans)

### Topics (6)
Photosynthesis, Solar System, Water Cycle, Electricity, Ecosystems, States of Matter

### Demo Story
"Stella's Photosynthesis Adventure" - 6 panels with Mr. Chloro

## What's NOT Included (By Design)

This is a **shell only** - no real functionality:
- ❌ No Supabase database
- ❌ No n8n workflows
- ❌ No AI API calls
- ❌ No actual image generation
- ❌ No real audio narration
- ❌ No PDF rendering
- ❌ No data persistence (except localStorage auth)

## Next Steps for Real Implementation

1. **Database Setup**: Integrate Supabase for users, stories, quizzes, etc.
2. **AI Integration**: Connect n8n workflows for story/image generation
3. **Authentication**: Replace mock auth with Supabase Auth
4. **Story Generation**: Implement real AI comic generation
5. **PDF Export**: Add actual PDF rendering
6. **Audio**: Integrate voice narration
7. **Payments**: Add Stripe integration
8. **Analytics**: Track user engagement

## Design Notes

- Mobile-first responsive design
- Blue primary color theme (avoiding purple per requirements)
- Accessible with focus states and ARIA labels
- Clean layouts with proper visual hierarchy
- Loading, empty, and error states throughout

---

**Status**: MVP Shell Complete ✅
**Build**: Verified and working
**Ready for**: Frontend review and backend integration planning
