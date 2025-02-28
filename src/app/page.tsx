export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center mt-20">
      <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-yellow-600">
        &lt; Welcome, I’m Joakim Åström /&gt;
      </h2>
      <p className="mb-8 text-xl text-gray-700 sm:text-2xl text-yellow-700">
        Frontend Developer | Next.js | React | TypeScript | And more...
      </p>
      <a
        href="/projects"
        className="rounded bg-black px-6 py-3 font-medium text-white hover:bg-gray-900 text-yellow-400"
      >
        View My Projects
      </a>
    </section>
  )
}
