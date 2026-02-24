const workouts = {
  Monday: {
    focus: 'Push Power',
    exercises: [
      { id: 'bench-press', name: 'Barbell Bench Press', sets: 4, reps: '6-8' },
      { id: 'incline-dumbbell', name: 'Incline Dumbbell Press', sets: 3, reps: '8-10' },
      { id: 'shoulder-press', name: 'Overhead Shoulder Press', sets: 3, reps: '10' },
      { id: 'tricep-dips', name: 'Tricep Dips', sets: 3, reps: '12-15' }
    ]
  },
  Tuesday: {
    focus: 'Lower Body Strength',
    exercises: [
      { id: 'back-squat', name: 'Back Squat', sets: 4, reps: '5-6' },
      { id: 'romanian-deadlift', name: 'Romanian Deadlift', sets: 3, reps: '8-10' },
      { id: 'walking-lunge', name: 'Walking Lunge', sets: 3, reps: '10/leg' },
      { id: 'calf-raise', name: 'Standing Calf Raise', sets: 4, reps: '15' }
    ]
  },
  Wednesday: {
    focus: 'Pull Hypertrophy',
    exercises: [
      { id: 'pull-ups', name: 'Weighted Pull-ups', sets: 4, reps: '6-8' },
      { id: 'barbell-row', name: 'Bent-over Barbell Row', sets: 4, reps: '8' },
      { id: 'face-pulls', name: 'Face Pulls', sets: 3, reps: '12-15' },
      { id: 'hammer-curl', name: 'Hammer Curls', sets: 3, reps: '12' }
    ]
  },
  Thursday: {
    focus: 'Mobility + Core',
    exercises: [
      { id: 'assault-bike', name: 'Assault Bike', sets: 1, reps: '15 min steady' },
      { id: 'dead-bug', name: 'Dead Bug', sets: 3, reps: '10/side' },
      { id: 'plank', name: 'RKC Plank', sets: 3, reps: '45 sec' },
      { id: 'hip-flow', name: 'Hip Mobility Flow', sets: 2, reps: '8 min' }
    ]
  },
  Friday: {
    focus: 'Full Body Performance',
    exercises: [
      { id: 'deadlift', name: 'Conventional Deadlift', sets: 4, reps: '4-6' },
      { id: 'front-squat', name: 'Front Squat', sets: 3, reps: '6-8' },
      { id: 'push-press', name: 'Push Press', sets: 3, reps: '6' },
      { id: 'farmer-carry', name: 'Farmer Carry', sets: 4, reps: '40m' }
    ]
  },
  Saturday: {
    focus: 'Conditioning',
    exercises: [
      { id: 'rower-sprints', name: 'Rower Sprints', sets: 10, reps: '30s on / 60s off' },
      { id: 'kettlebell-swings', name: 'Kettlebell Swings', sets: 4, reps: '20' },
      { id: 'burpees', name: 'Burpees', sets: 4, reps: '12' },
      { id: 'box-jumps', name: 'Box Jumps', sets: 4, reps: '10' }
    ]
  },
  Sunday: {
    focus: 'Recovery',
    exercises: [
      { id: 'walk', name: 'Zone 2 Walk', sets: 1, reps: '35 min' },
      { id: 'foam-roll', name: 'Foam Rolling', sets: 1, reps: '15 min' },
      { id: 'stretch', name: 'Full Body Stretch', sets: 1, reps: '20 min' }
    ]
  }
};

export default workouts;
