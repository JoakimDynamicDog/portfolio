import Link from "next/link"
import "./styles/hoverButton.css"

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center py-20 text-center lg:mt-40">
      <h2 className="heading mb-4">
        &lt; Welcome, I’m Joakim Åström /&gt;
      </h2>
      <p className="mb-8 text-xl text-gray-700 sm:text-2xl text-yellow-600">
        Frontend Developer | Next.js | React | TypeScript | And more...
      </p>
      {/* <a
        href="/projects"
        className="rounded bg-black px-6 py-3 font-medium text-white hover:bg-gray-900 text-yellow-400 border border-yellow-600"
      >
        View My Projects
      </a> */}
      <Link href="/projects">
        <div className="hoverContainer mt-8">
          <button className="hoverButton">My Projects</button>
        </div>
      </Link>
    </section>
  )
}
