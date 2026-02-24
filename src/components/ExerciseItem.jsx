import CheckboxTracker from './CheckboxTracker';

const ExerciseItem = ({ exercise, checked, onToggle }) => (
  <li
    className={`flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3 transition-all duration-300 ${
      checked ? 'border-neon/60 shadow-soft' : ''
    }`}
  >
    <div>
      <h4 className={`font-medium ${checked ? 'text-neon' : 'text-white'}`}>{exercise.name}</h4>
      <p className="text-sm text-slate-400">{exercise.sets} sets × {exercise.reps}</p>
    </div>
    <CheckboxTracker checked={checked} onChange={onToggle} />
  </li>
);

export default ExerciseItem;
