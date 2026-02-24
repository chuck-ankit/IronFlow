const CheckboxTracker = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className={`grid h-6 w-6 place-items-center rounded-md border transition-all ${
      checked ? 'border-neon bg-neon/25 text-neon' : 'border-slate-600 text-transparent'
    }`}
    aria-label="Toggle exercise completion"
  >
    ✓
  </button>
);

export default CheckboxTracker;
