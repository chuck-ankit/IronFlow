import { useMemo, useState } from 'react';
import HomePage from './pages/HomePage';
import TodayWorkoutPage from './pages/TodayWorkoutPage';
import WeeklyViewPage from './pages/WeeklyViewPage';
import ProgressDashboardPage from './pages/ProgressDashboardPage';
import LoginModal from './components/LoginModal';
import UserProfile from './components/UserProfile';
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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
    <div className="min-h-screen bg-abyss">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row">
        <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 border-r border-slate-800 bg-abyss/80 backdrop-blur-sm">
          <div className="flex h-20 items-center justify-center gap-3 border-b border-slate-800">
            <img src="/icon.svg" alt="IronFlow" className="w-10 h-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-neon to-orange-500 bg-clip-text text-transparent">
              IronFlow
            </h1>
          </div>
          <nav className="flex flex-1 flex-col gap-2 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab.label)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.label 
                    ? 'bg-neon/20 text-neon shadow-lg shadow-neon/10' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="border-t border-slate-800 p-4">
            <UserProfile onOpenLogin={() => setIsLoginOpen(true)} />
          </div>
        </aside>

        <main className="flex-1 lg:ml-64">
          <header className="flex items-center justify-between p-4 lg:hidden">
            <div className="flex items-center gap-2">
              <img src="/icon.svg" alt="IronFlow" className="w-8 h-8" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-neon to-orange-500 bg-clip-text text-transparent">
                IronFlow
              </h1>
            </div>
            <UserProfile onOpenLogin={() => setIsLoginOpen(true)} />
          </header>
          <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pb-24 pt-6 lg:max-w-4xl">
            {content}
          </div>
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto flex w-full max-w-xl justify-between border-t border-slate-800 bg-abyss/95 px-4 py-3 backdrop-blur lg:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab.label)}
              className={`rounded-xl px-3 py-2 text-xs font-medium transition-all duration-300 hover:scale-110 ${
                activeTab === tab.label ? 'bg-neon/20 text-neon' : 'text-slate-400'
              }`}
            >
              <span className="block text-lg" aria-hidden="true">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default App;