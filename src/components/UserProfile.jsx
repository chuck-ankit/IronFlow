import { useWorkoutStore } from '../store';

const UserProfile = ({ onOpenLogin }) => {
  const user = useWorkoutStore((state) => state.user);
  const logout = useWorkoutStore((state) => state.logout);

  if (!user) {
    return (
      <button
        onClick={onOpenLogin}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        <span className="text-sm font-medium">Sign In</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon to-blue-500 flex items-center justify-center">
          <span className="text-sm font-bold text-abyss">
            {user.name?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-white">{user.name}</p>
          <p className="text-xs text-slate-400">{user.email}</p>
        </div>
      </div>
      <button
        onClick={logout}
        className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-400/50 transition-all duration-300"
        title="Sign out"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  );
};

export default UserProfile;