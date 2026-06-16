export default function ActivityCard() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-4 text-white font-semibold">
          Weekly Activity
        </h2>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 rounded bg-cyan-500/60"
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="text-zinc-400">
          Hours Learned
        </h3>

        <p className="mt-2 text-4xl font-bold text-white">
          148
        </p>
      </section>
    </div>
  );
}