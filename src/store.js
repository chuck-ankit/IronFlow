import { create } from 'zustand';
import workouts from './data/workouts';
import { getTodayDateKey, getTodayWeekday, getWeekDateKeys, weekdayNames } from './utils/date';

const STORAGE_KEY = 'ironflow-progress';

const readProgress = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
};

const writeProgress = (progress) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
};

const completionForDate = (progress, dateKey, weekday) => {
  const exercises = workouts[weekday]?.exercises ?? [];
  const allowedIds = new Set(exercises.map((exercise) => exercise.id));
  const completed = (progress[dateKey]?.completedExercises ?? []).filter((id) => allowedIds.has(id));

  if (!exercises.length) {
    return 0;
  }

  return Math.round((completed.length / exercises.length) * 100);
};

export const useWorkoutStore = create((set, get) => ({
  progress: readProgress(),

  toggleExercise: ({ dateKey = getTodayDateKey(), exerciseId }) => {
    set((state) => {
      const dateProgress = state.progress[dateKey] ?? { completedExercises: [] };
      const completedExercises = dateProgress.completedExercises.includes(exerciseId)
        ? dateProgress.completedExercises.filter((id) => id !== exerciseId)
        : [...dateProgress.completedExercises, exerciseId];

      const updated = {
        ...state.progress,
        [dateKey]: { completedExercises }
      };
      writeProgress(updated);
      return { progress: updated };
    });
  },

  getCompletionForDate: ({ dateKey, weekday }) => completionForDate(get().progress, dateKey, weekday),

  getTodaySummary: () => {
    const weekday = getTodayWeekday();
    const dateKey = getTodayDateKey();
    return {
      weekday,
      dateKey,
      workout: workouts[weekday],
      completion: completionForDate(get().progress, dateKey, weekday)
    };
  },

  getWeeklyStats: () => {
    const week = getWeekDateKeys();
    const progress = get().progress;

    const completedDays = week.filter(({ dateKey, weekday }) => completionForDate(progress, dateKey, weekday) === 100).length;
    const totalCompletion = week.reduce((acc, { dateKey, weekday }) => acc + completionForDate(progress, dateKey, weekday), 0);

    return {
      week,
      completedDays,
      weeklyConsistency: Math.round((completedDays / week.length) * 100),
      averageCompletion: Math.round(totalCompletion / week.length)
    };
  },

  getStreakCount: () => {
    const progress = get().progress;
    let streak = 0;

    for (let i = 0; i < 365; i += 1) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().slice(0, 10);
      const weekday = weekdayNames[date.getDay()];
      const completion = completionForDate(progress, dateKey, weekday);

      if (completion === 100) {
        streak += 1;
      } else {
        break;
      }
    }

    return streak;
  },

  getTotalWorkoutsCompleted: () => {
    const progress = get().progress;
    return Object.entries(progress).filter(([dateKey]) => {
      const date = new Date(`${dateKey}T00:00:00`);
      const weekday = weekdayNames[date.getDay()];
      return completionForDate(progress, dateKey, weekday) === 100;
    }).length;
  }
}));
