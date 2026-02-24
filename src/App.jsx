import { useMemo, useState } from 'react';
import HomePage from './pages/HomePage';
import TodayWorkoutPage from './pages/TodayWorkoutPage';
import WeeklyViewPage from './pages/WeeklyViewPage';
import ProgressDashboardPage from './pages/ProgressDashboardPage';
import { useWorkoutStore } from './store';
import { getTodayWeekday } from './utils/date';

const tabs = [
  { label: 'Home', icon: '🏠' },
  { label: 'Workout', icon: '🏋️' },
  { label: 'Weekly', icon: '📅' },
  { label: 'Progress', icon: '📈' }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedDay, setSelectedDay] = useState(getTodayWeekday());
  const todaySummary = useWorkoutStore((state) => state.getTodaySummary());

  const content = useMemo(() => {
    switch (activeTab) {
      case 'Workout':
        return <TodayWorkoutPage selectedDay={selectedDay} setSelectedDay={setSelectedDay} />;
      case 'Weekly':
        return <WeeklyViewPage />;
      case 'Progress':
        return <ProgressDashboardPage />;
      case 'Home':
      default:
        return <HomePage todaySummary={todaySummary} onContinue={() => setActiveTab('Workout')} />;
    }
  }, [activeTab, selectedDay, todaySummary]);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pb-24 pt-6">
      <main className="flex-1">{content}</main>

      <nav className="fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-xl justify-between border-t border-slate-800 bg-abyss/95 px-4 py-3 backdrop-blur">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(tab.label)}
            className={`rounded-xl px-3 py-2 text-xs font-medium ${
              activeTab === tab.label ? 'bg-neon/20 text-neon' : 'text-slate-400'
            }`}
          >
            <span className="mr-1" aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
