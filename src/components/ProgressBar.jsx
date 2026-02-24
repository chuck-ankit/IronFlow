const ProgressBar = ({ value }) => (
  <div className="w-full">
    <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
      <span>Completion</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-gradient-to-r from-neon to-glow transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
