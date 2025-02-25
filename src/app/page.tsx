export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
        Welcome, I’m Joakim Åström
      </h2>
      <p className="mb-8 text-xl text-gray-700 sm:text-2xl">
        Frontend Developer | Next.js | React | TypeScript | And more...
      </p>
      <a
        href="/projects"
        className="rounded bg-gray-500 px-6 py-3 font-medium text-white hover:bg-gray-600"
      >
        View My Projects
      </a>
    </section>
  )
}
