import { useWorkoutStore } from '../store';

const WeeklyViewPage = () => {
  const weeklyStats = useWorkoutStore((state) => state.getWeeklyStats());
  const getCompletionForDate = useWorkoutStore((state) => state.getCompletionForDate);

  return (
    <div className="space-y-4">
      <header>
        <p className="text-sm text-slate-400">Weekly View</p>
        <h2 className="text-2xl font-bold">Mon - Sun Overview</h2>
      </header>

      <div className="grid gap-3">
        {weeklyStats.week.map(({ weekday, dateKey }) => {
          const completion = getCompletionForDate({ dateKey, weekday });
          const isComplete = completion === 100;

          return (
            <article
              key={dateKey}
              className={`rounded-2xl border p-4 transition-all ${
                isComplete ? 'border-neon bg-neon/10 shadow-soft' : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{dateKey}</p>
                  <p className="text-lg font-semibold">{weekday}</p>
                </div>
                <span className={`text-sm font-semibold ${isComplete ? 'text-neon' : 'text-slate-300'}`}>
                  {completion}%
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyViewPage;
