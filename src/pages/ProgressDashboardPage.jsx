import StatsCard from '../components/StatsCard';
import { useWorkoutStore } from '../store';

const ProgressDashboardPage = () => {
  const total = useWorkoutStore((state) => state.getTotalWorkoutsCompleted());
  const streak = useWorkoutStore((state) => state.getStreakCount());
  const weekly = useWorkoutStore((state) => state.getWeeklyStats());

  return (
    <div className="space-y-4">
      <header>
        <p className="text-sm text-slate-400">Progress Dashboard</p>
        <h2 className="text-2xl font-bold">Your Momentum</h2>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatsCard label="Total Completed" value={total} />
        <StatsCard label="Weekly Consistency" value={`${weekly.weeklyConsistency}%`} />
        <StatsCard label="Current Streak" value={`${streak} day${streak === 1 ? '' : 's'}`} />
      </div>

      <StatsCard label="Average Weekly Completion" value={`${weekly.averageCompletion}%`} />
    </div>
  );
};

export default ProgressDashboardPage;
