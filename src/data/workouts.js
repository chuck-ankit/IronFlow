const workouts = {
  Monday: {
    title: "Push (Chest Power - Preserve Muscle)",
    exercises: [
      { id: "mon-1", name: "Barbell Bench Press", sets: "4x5" },           // Reduced from 5x5
      { id: "mon-2", name: "Incline Dumbbell Press", sets: "3x10" },        // Reduced from 4x8-10
      { id: "mon-3", name: "Machine Chest Press", sets: "3x10-12" },        // Reduced from 3 sets? Actually kept 3 but fine
      { id: "mon-4", name: "Seated DB Shoulder Press", sets: "3x8" },       // Reduced from 4x8
      { id: "mon-5", name: "Lateral Raises", sets: "4x15" },                // Unchanged
      { id: "mon-6", name: "Skull Crushers", sets: "3x10" },                // Reduced from 4x10
      { id: "mon-7", name: "Rope Pushdown", sets: "3x12" },                 // Reduced from 4x12
      { id: "mon-8", name: "Incline Walk", sets: "30 min cardio" }          // Increased from 15 min
    ]
  },

  Tuesday: {
    title: "Pull (Back Thickness - Minimal Arms)",
    exercises: [
      { id: "tue-1", name: "Pull-ups / Assisted", sets: "4 sets" },         // Unchanged
      { id: "tue-2", name: "Barbell Row", sets: "4x8" },                    // Unchanged
      { id: "tue-3", name: "Seated Cable Row", sets: "3x10-12" },           // Reduced from 4x10-12
      { id: "tue-4", name: "Barbell Curl", sets: "3x8-10" },                // Reduced from 4x8-10
      { id: "tue-5", name: "Hammer Curl", sets: "3x12" },                   // Reduced from 4x12 (REMOVED Incline DB Curl)
      { id: "tue-6", name: "Incline Walk", sets: "30 min cardio" }          // Increased from 15 min
    ]
  },

  Wednesday: {
    title: "Legs + Core (Squat Focus)",
    exercises: [
      { id: "wed-1", name: "Barbell Squat", sets: "4x5" },                  // Reduced from 5x5
      { id: "wed-2", name: "Leg Press", sets: "3x12" },                     // Reduced from 4x12
      { id: "wed-3", name: "Romanian Deadlift", sets: "3x10" },             // Reduced from 4x10
      { id: "wed-4", name: "Leg Curl", sets: "3x12" },                      // Reduced from 4x12
      { id: "wed-5", name: "Standing Calf Raise", sets: "4x15" },           // Reduced from 5x15
      { id: "wed-6", name: "Hanging Leg Raise", sets: "3x15" },             // Reduced from 4x15
      { id: "wed-7", name: "Cable Crunch", sets: "3x20" },                  // Reduced from 4x20
      { id: "wed-8", name: "Incline Walk", sets: "30 min cardio" }          // Increased from 20 min
    ]
  },

  Thursday: {
    title: "Push (Shoulder + Chest Specialization)",
    exercises: [
      { id: "thu-1", name: "Overhead Press", sets: "4x6" },                 // Unchanged
      { id: "thu-2", name: "Arnold Press", sets: "3x10" },                  // Reduced from 4x10
      { id: "thu-3", name: "Incline Dumbbell Press", sets: "3x10" },        // **[NEW - ADDED]** to hit chest twice a week
      { id: "thu-4", name: "Cable Lateral Raise", sets: "4x15" },           // Unchanged
      { id: "thu-5", name: "Rear Delt Fly", sets: "4x15" },                 // Unchanged
      { id: "thu-6", name: "Overhead Rope Extension", sets: "3x12" },       // **[CHANGED]** Replaces FST-7 Triceps (removed Decline Pushups)
      { id: "thu-7", name: "Mountain Climbers HIIT", sets: "30s + 60s x10" } // Unchanged
    ]
  },

  Friday: {
    title: "Pull (Lat + Forearm Specialization)",
    exercises: [
      { id: "fri-1", name: "Wide Grip Lat Pulldown", sets: "4x10" },        // Unchanged
      { id: "fri-2", name: "Chest Supported Row", sets: "3x12" },           // Reduced from 4x12
      { id: "fri-3", name: "Single Arm DB Row", sets: "3x10" },             // Reduced from 4x10
      { id: "fri-4", name: "Straight Arm Pulldown", sets: "3x15" },         // Unchanged
      { id: "fri-5", name: "Preacher Curl", sets: "3x10-12" },              // Reduced from 4x10-12
      { id: "fri-6", name: "Reverse EZ Curl", sets: "3x15" },               // Kept (FOREARMS) - Unchanged
      { id: "fri-7", name: "Incline Walk", sets: "30 min cardio" }          // Increased from 20 min
      // (REMOVED: FST-7 Cable Curl, Wrist Curl, and Reverse Wrist Curl to save elbows)
    ]
  },

  Saturday: {
    title: "Legs + Deadlift + Conditioning",
    exercises: [
      { id: "sat-1", name: "Deadlift", sets: "3x5" },                       // **[MOVED]** from Tuesday. Reduced from 5x5 to 3x5.
      { id: "sat-2", name: "Leg Extension", sets: "3x15" },                 // Reduced from 4x15
      { id: "sat-3", name: "Hip Thrust", sets: "3x12" },                    // Reduced from 4x12
      { id: "sat-4", name: "Ham Curl", sets: "3x15" },                      // Reduced from 4x15
      { id: "sat-5", name: "Adductor Machine", sets: "3x15" },              // Reduced from 4x15
      { id: "sat-6", name: "Conditioning Circuit", sets: "3-4 rounds" },    // Unchanged
      { id: "sat-7", name: "Incline Walk Fast", sets: "1 min" },            // Unchanged
      { id: "sat-8", name: "Dumbbell Punches", sets: "40 sec" },            // Unchanged
      { id: "sat-9", name: "Dumbbell Swings", sets: "20 reps" },            // Unchanged
      { id: "sat-10", name: "Jump Rope / High Knees", sets: "1 min" },      // Unchanged
      { id: "sat-11", name: "Mountain Climbers", sets: "30 sec" }           // Unchanged
      // (REMOVED: Hack Squat / Smith Squat)
    ]
  },

  Sunday: {
    title: "Rest / Active Recovery",
    exercises: [
      { id: "sun-1", name: "Walking", sets: "10000 steps" },                // Increased target
      { id: "sun-2", name: "Stretching", sets: "10 min mobility" }          // Increased from 5-8 min
    ]
  }
};

export default workouts;
