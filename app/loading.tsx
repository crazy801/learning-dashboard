export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="animate-pulse space-y-6">
        <div className="h-40 rounded-3xl bg-zinc-900" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-44 rounded-3xl bg-zinc-900" />
          <div className="h-44 rounded-3xl bg-zinc-900" />
          <div className="h-44 rounded-3xl bg-zinc-900" />
        </div>
      </div>
    </main>
  );
}