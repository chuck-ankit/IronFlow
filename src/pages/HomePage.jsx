import { useEffect, useState } from 'react';
import WorkoutCard from '../components/WorkoutCard';
import { useWorkoutStore } from '../store';

const HomePage = ({ todaySummary, onContinue }) => {
  const [animated, setAnimated] = useState(false);
  const [stats, setStats] = useState({ totalWorkouts: 0, streakDays: 0, hoursTrained: 0 });
  
  const getTotalWorkouts = useWorkoutStore((state) => state.getTotalWorkoutsCompleted);
  const getStreakCount = useWorkoutStore((state) => state.getStreakCount);
  const getHoursTrained = useWorkoutStore((state) => state.getHoursTrained);
  const user = useWorkoutStore((state) => state.user);

  useEffect(() => {
    setAnimated(true);
    setStats({
      totalWorkouts: getTotalWorkouts(),
      streakDays: getStreakCount(),
      hoursTrained: getHoursTrained()
    });
  }, [getTotalWorkouts, getStreakCount, getHoursTrained, todaySummary]);

  const statCards = [
    { label: 'Total Workouts', value: stats.totalWorkouts, icon: '🔥', color: 'from-orange-500 to-red-500' },
    { label: 'Streak Days', value: stats.streakDays, icon: '⚡', color: 'from-neon to-blue-500' },
    { label: 'Hours Trained', value: stats.hoursTrained, icon: '⏱️', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="space-y-6">
      <header className={`flex items-center gap-3 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <img src="/icon.svg" alt="IronFlow" className="w-12 h-12" />
        <div>
          <p className="text-sm text-slate-400">
            {user ? `Welcome back, ${user.name}` : 'Welcome back'}
          </p>
          <h1 className="text-4xl font-bold text-white">IronFlow</h1>
        </div>
      </header>

      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 transition-all duration-700 delay-100 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-orange-500 blur-3xl"></div>
        </div>
        <img 
          src="/hero-bg.svg" 
          alt="Fitness Hero" 
          className="w-full h-48 object-cover rounded-t-3xl opacity-60"
        />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm text-neon font-medium">{todaySummary.weekday}</p>
          <h2 className="text-2xl font-bold text-white">{todaySummary.workout.title || todaySummary.workout.focus}</h2>
          <button
            onClick={onContinue}
            className="mt-3 rounded-xl bg-gradient-to-r from-neon to-blue-500 px-6 py-2.5 text-sm font-semibold text-abyss transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon/25 active:scale-95"
          >
            Continue Workout →
          </button>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-3">
        {statCards.map((stat, index) => (
          <article 
            key={stat.label}
            className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-slate-700 cursor-pointer ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${stat.color}`}></div>
            <p className="text-3xl mb-1">{stat.icon}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-slate-400">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className={`rounded-3xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Today's Progress</h3>
          <span className="text-sm text-neon font-medium">{todaySummary.completion}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-neon to-blue-500 transition-all duration-1000 ease-out"
            style={{ width: `${todaySummary.completion}%` }}
          ></div>
        </div>
        <div className="mt-4 flex justify-between text-xs text-slate-400">
          <span>{todaySummary.completedExercises} / {todaySummary.workout.exercises.length} exercises</span>
          <span className="text-neon">Keep pushing! 💪</span>
        </div>
      </section>

      <section className={`grid grid-cols-2 gap-3 transition-all duration-700 delay-400 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <article 
          onClick={onContinue}
          className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 transition-all duration-300 hover:border-neon/30 hover:shadow-lg hover:shadow-neon/5 cursor-pointer"
        >
          <div className="text-2xl mb-2">📊</div>
          <h4 className="font-semibold text-white">Track Progress</h4>
          <p className="text-xs text-slate-400">View your weekly stats</p>
        </article>
        <article className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer">
          <div className="text-2xl mb-2">🎯</div>
          <h4 className="font-semibold text-white">Set Goals</h4>
          <p className="text-xs text-slate-400">Define your targets</p>
        </article>
      </section>

      <div className={`flex justify-center py-4 transition-all duration-700 delay-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-slate-500 animate-pulse">Swipe up to see all features →</p>
      </div>
    </div>
  );
};

export default HomePage;