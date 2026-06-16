export default function HeroCard() {
  return (
    <section
      className="
      col-span-2
      rounded-3xl
      border border-zinc-800
      bg-gradient-to-br
      from-cyan-500/20
      via-blue-500/10
      to-purple-500/20
      p-8
    ">
      <h1 className="text-4xl font-bold text-white">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Ready to continue learning?
      </p>

      <div className="mt-6 inline-flex rounded-full bg-orange-500/20 px-4 py-2 text-orange-400">
        🔥 15 Day Streak
      </div>

      <div className="mt-8 flex gap-8">
        <div>
          <p className="text-zinc-400">Courses</p>
          <p className="text-2xl font-bold text-white">4</p>
        </div>

        <div>
          <p className="text-zinc-400">Avg Progress</p>
          <p className="text-2xl font-bold text-white">66%</p>
        </div>
      </div>
    </section>
  );
}