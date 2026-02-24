import WorkoutCard from '../components/WorkoutCard';
import EmptyStateCard from '../components/EmptyStateCard';

const HomePage = ({ todaySummary, onContinue }) => {
  if (!todaySummary?.workout) {
    return <EmptyStateCard title="No workout loaded" description="Workout data is unavailable." />;
  }

  return (
  <div className="space-y-5">
    <header>
      <p className="text-sm text-slate-400">Welcome back</p>
      <h1 className="text-4xl font-bold text-white">IronFlow</h1>
      <p className="mt-1 text-sm text-slate-500">Train consistently. Everything saves on-device.</p>
    </header>

    <WorkoutCard
      title={`Today · ${todaySummary.weekday}`}
      subtitle={todaySummary.workout.focus}
      completion={todaySummary.completion}
      cta="Continue Workout"
      onClick={onContinue}
    />

    <section className="grid grid-cols-2 gap-3">
      <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-400">Exercises</p>
        <p className="mt-1 text-2xl font-semibold">{todaySummary.workout.exercises.length}</p>
      </article>
      <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-400">Completion</p>
        <p className="mt-1 text-2xl font-semibold text-neon">{todaySummary.completion}%</p>
      </article>
    </section>
  </div>
  );
};

export default HomePage;
