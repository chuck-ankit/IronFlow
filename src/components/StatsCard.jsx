const StatsCard = ({ label, value }) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
    <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
  </article>
);

export default StatsCard;
