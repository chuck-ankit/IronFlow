const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DaySelector = ({ selected, onSelect }) => (
  <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
    {dayOrder.map((day) => (
      <button
        key={day}
        type="button"
        onClick={() => onSelect(day)}
        className={`rounded-xl border px-3 py-2 text-sm transition-all ${
          selected === day
            ? 'border-neon bg-neon/20 text-neon'
            : 'border-slate-700 bg-slate-900/40 text-slate-300'
        }`}
      >
        {day.slice(0, 3)}
      </button>
    ))}
  </div>
);

export default DaySelector;
