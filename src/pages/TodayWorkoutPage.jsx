import DaySelector from '../components/DaySelector';
import ExerciseItem from '../components/ExerciseItem';
import ProgressBar from '../components/ProgressBar';
import workouts from '../data/workouts';
import { getDateKeyForWeekdayInCurrentWeek } from '../utils/date';
import { useWorkoutStore } from '../store';

const TodayWorkoutPage = ({ selectedDay, setSelectedDay }) => {
  const toggleExercise = useWorkoutStore((state) => state.toggleExercise);
  const progress = useWorkoutStore((state) => state.progress);
  const workout = workouts[selectedDay];

  const dateKey = getDateKeyForWeekdayInCurrentWeek(selectedDay);
  const completed = progress[dateKey]?.completedExercises ?? [];
  const completion = workout.exercises.length ? Math.round((completed.length / workout.exercises.length) * 100) : 0;

  return (
    <div className="space-y-5">
      <header>
        <p className="text-sm text-slate-400">Workout Plan</p>
        <h2 className="text-2xl font-bold">{selectedDay} · {workout.focus}</h2>
        <p className="mt-1 text-sm text-slate-500">Auto-saved locally for {dateKey}</p>
      </header>

      <DaySelector selected={selectedDay} onSelect={setSelectedDay} />
      <div className="rounded-3xl border border-slate-800 bg-charcoal/70 p-4">
        <ProgressBar value={completion} />
      </div>

      <ul className="space-y-3">
        {workout.exercises.map((exercise) => (
          <ExerciseItem
            key={exercise.id}
            exercise={exercise}
            checked={completed.includes(exercise.id)}
            onToggle={() => toggleExercise({ dateKey, exerciseId: exercise.id })}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodayWorkoutPage;
