const workouts = {
  Monday: {
    title: "Push (Chest Power)",
    exercises: [
      { id: "mon-1", name: "Barbell Bench Press", sets: "5x5" },
      { id: "mon-2", name: "Incline Dumbbell Press", sets: "4x10" },
      { id: "mon-3", name: "Machine Chest Press", sets: "4x12" },
      { id: "mon-4", name: "Cable Fly", sets: "4x15" },
      { id: "mon-5", name: "Seated DB Shoulder Press", sets: "4x8" },
      { id: "mon-6", name: "Lateral Raises", sets: "5x15" },
      { id: "mon-7", name: "Upright Row", sets: "3x12" },
      { id: "mon-8", name: "Skull Crushers", sets: "4x10" },
      { id: "mon-9", name: "Rope Pushdown", sets: "4x12" },
      { id: "mon-10", name: "Incline Walk", sets: "15 min cardio" }
    ]
  },

  Tuesday: {
    title: "Pull (Back Thickness)",
    exercises: [
      { id: "tue-1", name: "Deadlift", sets: "5x5" },
      { id: "tue-2", name: "Pull-ups / Assisted", sets: "4 sets" },
      { id: "tue-3", name: "Barbell Row", sets: "4x8" },
      { id: "tue-4", name: "Seated Cable Row", sets: "4x12" },
      { id: "tue-5", name: "Straight Arm Pulldown", sets: "3x15" },
      { id: "tue-6", name: "Barbell Curl", sets: "4x10" },
      { id: "tue-7", name: "Incline DB Curl", sets: "4x12" },
      { id: "tue-8", name: "Hammer Curl", sets: "3x12" },
      { id: "tue-9", name: "Incline Walk", sets: "15 min cardio" }
    ]
  },

  Wednesday: {
    title: "Legs + Core",
    exercises: [
      { id: "wed-1", name: "Barbell Squat", sets: "5x5" },
      { id: "wed-2", name: "Leg Press", sets: "4x12" },
      { id: "wed-3", name: "Walking Lunges", sets: "3 rounds" },
      { id: "wed-4", name: "Romanian Deadlift", sets: "4x10" },
      { id: "wed-5", name: "Leg Curl", sets: "4x12" },
      { id: "wed-6", name: "Standing Calf Raise", sets: "5x15" },
      { id: "wed-7", name: "Hanging Leg Raise", sets: "4x15" },
      { id: "wed-8", name: "Cable Crunch", sets: "4x20" },
      { id: "wed-9", name: "Incline Walk", sets: "20 min cardio" }
    ]
  },

  Thursday: {
    title: "Push (Shoulder Specialization)",
    exercises: [
      { id: "thu-1", name: "Overhead Press", sets: "4x6" },
      { id: "thu-2", name: "Arnold Press", sets: "4x10" },
      { id: "thu-3", name: "Cable Lateral Raise", sets: "5x15" },
      { id: "thu-4", name: "Rear Delt Fly", sets: "5x15" },
      { id: "thu-5", name: "Decline Pushups", sets: "4 sets" },
      { id: "thu-6", name: "Triceps FST-7 Rope Pushdown", sets: "7x10-12" },
      { id: "thu-7", name: "Mountain Climbers HIIT", sets: "30s + 60s x10" }
    ]
  },

  Friday: {
    title: "Pull (Lat + Arm FST-7)",
    exercises: [
      { id: "fri-1", name: "Wide Grip Lat Pulldown", sets: "4x10" },
      { id: "fri-2", name: "Chest Supported Row", sets: "4x12" },
      { id: "fri-3", name: "Single Arm DB Row", sets: "4x10" },
      { id: "fri-4", name: "FST-7 Cable Pullover", sets: "7x10-12" },
      { id: "fri-5", name: "FST-7 Cable Curl", sets: "7x12" },
      { id: "fri-6", name: "FST-7 Overhead Rope Extension", sets: "7x12" },
      { id: "fri-7", name: "Incline Walk", sets: "20 min cardio" }
    ]
  },

  Saturday: {
    title: "Legs + Conditioning",
    exercises: [
      { id: "sat-1", name: "Hack Squat / Smith Squat", sets: "4x12" },
      { id: "sat-2", name: "Leg Extension", sets: "4x15" },
      { id: "sat-3", name: "Hip Thrust", sets: "4x12" },
      { id: "sat-4", name: "Ham Curl", sets: "4x15" },
      { id: "sat-5", name: "Conditioning Circuit", sets: "3-4 rounds" },
      { id: "sat-6", name: "Incline Walk Fast", sets: "1 min" },
      { id: "sat-7", name: "Dumbbell Punches", sets: "40 sec" },
      { id: "sat-8", name: "Dumbbell Swings", sets: "20 reps" },
      { id: "sat-9", name: "Jump Rope / High Knees", sets: "1 min" },
      { id: "sat-10", name: "Mountain Climbers", sets: "30 sec" }
    ]
  },

  Sunday: {
    title: "Rest / Active Recovery",
    exercises: [
      { id: "sun-1", name: "Walking", sets: "8000-12000 steps" },
      { id: "sun-2", name: "Stretching", sets: "5-8 min mobility" }
    ]
  }
};

export default workouts;