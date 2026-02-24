const EmptyStateCard = ({ title, description }) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
    <p className="text-lg font-semibold text-white">{title}</p>
    <p className="mt-2 text-sm text-slate-400">{description}</p>
  </article>
);

export default EmptyStateCard;
