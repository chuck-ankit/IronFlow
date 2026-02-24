# IronFlow 💪

A modern, responsive workout tracker web application built with React, Tailwind CSS, and Zustand for state management.

![IronFlow](https://img.shields.io/badge/version-1.0.0-blue) ![React](https://img.shields.io/badge/React-18.3-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-green)

## Features

- **Weekly Workout Plans** - 7-day workout schedule with different focus areas (Push, Pull, Legs, etc.)
- **Exercise Tracking** - Mark exercises as complete with persistent local storage
- **Progress Dashboard** - Track your consistency, streaks, and completion rates
- **Responsive Design** - Works seamlessly on mobile and desktop
- **PWA Support** - Install as a native app on your device
- **Animated UI** - Smooth transitions and micro-interactions

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Zustand** - Lightweight state management
- **Vite PWA** - Progressive Web App support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

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

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── CheckboxTracker.jsx
│   ├── DaySelector.jsx
│   ├── ExerciseItem.jsx
│   ├── ProgressBar.jsx
│   ├── StatsCard.jsx
│   └── WorkoutCard.jsx
├── data/
│   └── workouts.js   # Weekly workout data
├── pages/
│   ├── HomePage.jsx
│   ├── TodayWorkoutPage.jsx
│   ├── WeeklyViewPage.jsx
│   └── ProgressDashboardPage.jsx
├── store.js          # Zustand store
├── utils/
│   └── date.js       # Date utilities
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css        # Global styles
```

## Workout Schedule

| Day | Focus |
|-----|-------|
| Monday | Push (Chest Power) |
| Tuesday | Pull (Back Thickness) |
| Wednesday | Legs + Core |
| Thursday | Push (Shoulder Specialization) |
| Friday | Pull (Lat + Arm FST-7) |
| Saturday | Legs + Conditioning |
| Sunday | Rest / Active Recovery |

## Data Storage

All workout progress is stored locally in your browser using localStorage. Your data persists between sessions and stays on your device.

## License

MIT License - Feel free to use and modify for your own projects.
