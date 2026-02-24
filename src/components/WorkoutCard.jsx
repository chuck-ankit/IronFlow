import ProgressBar from './ProgressBar';

const WorkoutCard = ({ title, subtitle, completion, cta, onClick }) => (
  <section className="animate-fadeIn rounded-3xl border border-slate-800 bg-charcoal/75 p-5 shadow-soft">
    <p className="text-sm uppercase tracking-wider text-neon">{title}</p>
    <h2 className="mt-1 text-2xl font-semibold text-white">{subtitle}</h2>
    <div className="mt-5">
      <ProgressBar value={completion} />
    </div>
    {cta && (
      <button
        type="button"
        onClick={onClick}
        className="mt-5 w-full rounded-2xl bg-gradient-to-r from-neon to-glow px-4 py-3 font-semibold text-slate-900 hover:opacity-90"
      >
        {cta}
      </button>
    )}
  </section>
);

export default WorkoutCard;
