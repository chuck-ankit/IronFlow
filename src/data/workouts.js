const workouts = {
  Monday: {
    title: "Push (Strength - OHP + Chest Power)",
    exercises: [
      { id: "mon-1", name: "Overhead Press (Barbell)", sets: "4x6" },           // MOVED from Thursday (do this FIRST)
      { id: "mon-2", name: "Barbell Bench Press", sets: "4x5" },                // Reduced from 5x5
      { id: "mon-3", name: "Incline Dumbbell Press", sets: "3x10" },            // Reduced from 4x8-10
      { id: "mon-4", name: "Machine Chest Press", sets: "3x10-12" },            // Unchanged
      { id: "mon-5", name: "Seated DB Lateral Raises", sets: "4x15" },          // Unchanged
      { id: "mon-6", name: "Skull Crushers (EZ Bar)", sets: "3x10" },           // Reduced from 4x10
      { id: "mon-7", name: "Rope Pushdowns", sets: "3x12" },                    // Reduced from 4x12
      { id: "mon-8", name: "Incline Walk (Full Cardio)", sets: "30 min cardio" } // Increased from 15 min
    ]
  },

  Tuesday: {
    title: "Pull (Back Thickness - Minimal Arms)",
    exercises: [
      { id: "tue-1", name: "Pull-ups / Assisted", sets: "4 sets" },
      { id: "tue-2", name: "Barbell Row", sets: "4x8" },
      { id: "tue-3", name: "Seated Cable Row", sets: "3x10-12" },               // Reduced from 4x10-12
      { id: "tue-4", name: "Barbell Curl", sets: "3x8-10" },                    // Reduced from 4x8-10
      { id: "tue-5", name: "Hammer Curl (Rope)", sets: "3x12" },                // Reduced from 4x12
      { id: "tue-6", name: "Incline Walk (Full Cardio)", sets: "30 min cardio" } // Increased from 15 min
    ]
  },

  Wednesday: {
    title: "Legs (Quad Focus - Save Lower Back)",
    exercises: [
      { id: "wed-1", name: "Barbell Squat", sets: "4x5" },                      // Reduced from 5x5
      { id: "wed-2", name: "Leg Press (3-sec Negative Tempo)", sets: "3x12" },  // ADDED tempo for quad growth
      { id: "wed-3", name: "Lying Leg Curl", sets: "3x12" },                    // Reduced from 4x12 (RDLs REMOVED from Wed)
      { id: "wed-4", name: "Standing Calf Raise", sets: "4x15" },               // Reduced from 5x15
      { id: "wed-5", name: "Hanging Leg Raise", sets: "3x15" },                 // Reduced from 4x15
      { id: "wed-6", name: "Cable Crunch", sets: "3x20" },                      // Reduced from 4x20
      { id: "wed-7", name: "Incline Walk (Light Recovery)", sets: "20 min cardio" } // REDUCED to save quads
    ]
  },

  Thursday: {
    title: "Shoulders + Chest Pump + HIIT (No OHP)",
    exercises: [
      { id: "thu-1", name: "Incline Dumbbell Press (Light Pump)", sets: "3x10" }, // KEPT to hit chest 2x, but LIGHT weight
      { id: "thu-2", name: "Arnold Press (Dumbbell)", sets: "3x10" },            // Reduced from 4x10
      { id: "thu-3", name: "Cable Lateral Raise", sets: "4x15" },                // Unchanged
      { id: "thu-4", name: "Rear Delt Fly (Machine/Cable)", sets: "4x15" },      // Unchanged
      { id: "thu-5", name: "Overhead Rope Extension", sets: "3x12" },            // Replaces FST-7 (no decline pushups)
      { id: "thu-6", name: "HIIT Circuit (Mtn Climbers + Swings + Punches)", sets: "30s on / 60s off x10" }, // Merged circuits
      { id: "thu-7", name: "Jump Rope / High Knees (Finisher)", sets: "1 min rounds x3" }
      // NOTE: NO incline walk today - HIIT is the cardio
    ]
  },

  Friday: {
    title: "Pull (Lats + Forearms + Posture Fix)",
    exercises: [
      { id: "fri-1", name: "Wide Grip Lat Pulldown", sets: "4x10" },
      { id: "fri-2", name: "Chest Supported Row (Machine)", sets: "3x12" },      // Reduced from 4x12
      { id: "fri-3", name: "Single Arm Dumbbell Row", sets: "3x10" },            // Reduced from 4x10
      { id: "fri-4", name: "Straight Arm Pulldown (Rope)", sets: "3x15" },
      { id: "fri-5", name: "Face Pulls (Rear Delt / Posture)", sets: "3x15" },   // **[NEW - NITPICK FIX]** Pulls shoulders back
      { id: "fri-6", name: "Preacher Curl (EZ Bar)", sets: "3x10-12" },          // Reduced from 4x10-12
      { id: "fri-7", name: "Reverse EZ Bar Curl (Extensors)", sets: "3x15" },    // Forearm extensor
      { id: "fri-8", name: "Wrist Curl (Barbell - Flexors)", sets: "3x15" },     // **[ADDED BACK]** Complete forearms
      { id: "fri-9", name: "Incline Walk (Full Cardio)", sets: "30 min cardio" } // Increased from 20 min
      // (REMOVED: FST-7 Cable Curl, standard Wrist Curl was replaced with this combined)
    ]
  },

  Saturday: {
    title: "Deadlift + Legs (Posterior Chain - No Explosives)",
    exercises: [
      { id: "sat-1", name: "Conventional Deadlift", sets: "3x5" },               // **[MOVED]** from Tuesday, reduced from 5x5
      { id: "sat-2", name: "Romanian Deadlift (RDLs)", sets: "3x10" },           // **[MOVED]** from Wednesday (pairs perfectly here)
      { id: "sat-3", name: "Leg Extension", sets: "3x15" },                      // Reduced from 4x15
      { id: "sat-4", name: "Bulgarian Split Squats (Dumbbell)", sets: "3x10" },  // REPLACES Hip Thrusts (better quads/glutes, less CNS)
      { id: "sat-5", name: "Adductor Machine", sets: "3x15" },                   // Reduced from 4x15
      { id: "sat-6", name: "Incline Walk (Light Recovery)", sets: "20 min cardio" } // REDUCED to save lower back
      // (REMOVED: Entire explosive conditioning circuit - moved to Thursday to protect your spine)
    ]
  },

  Sunday: {
    title: "Active Recovery (Specific Mobility)",
    exercises: [
      { id: "sun-1", name: "Walking (Daily Steps)", sets: "10000 steps" },
      { id: "sun-2", name: "Hip Flexor Stretch (Lunge Pose)", sets: "3x30 sec per side" }, // Crucial for squat depth
      { id: "sun-3", name: "Thoracic Spine Rotations (Open Books)", sets: "3x30 sec per side" }, // Crucial for posture/OHP
      { id: "sun-4", name: "Pancake Stretch / Hamstring Stretch", sets: "3x30 sec" }
      // Removed generic "5-8 min mobility" - now it's specific to YOUR weak points.
    ]
  }
};

export default workouts;
