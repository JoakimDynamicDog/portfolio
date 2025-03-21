export default function AboutPage() {
  return (
    <div className="py-12">
      <h2 className="mb-6 heading-small">About Me</h2>
      <p className="mb-4 text-white">
        I am a frontend developer who also enjoys working on backend projects,
        with a passion for creating clean, user-centric applications. I
        specialize in <span className="font-semibold">Next.js, React</span>, and{" "}
        <span className="font-semibold">React Native</span>, and I love working
        with modern web and mobile technologies to build seamless experiences.
      </p>
      <p className="mb-4 text-white">
        I have experience working with{" "}
        <span className="font-semibold">#CMS</span> platforms, building{" "}
        <span className="font-semibold">#REST APIs</span>, and managing{" "}
        <span className="font-semibold">#SQL</span> and{" "}
        <span className="font-semibold">#NoSQL</span> databases. Down below is a
        breakdown of my skills.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-lg mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-3 text-left font-semibold text-yellow-400">
                Category
              </th>
              <th className="border-b px-4 py-3 text-left font-semibold text-yellow-400">
                Skills
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-semibold text-yellow-600">Frontend</td>
              <td className="px-4 py-3 text-white">
                Next.js, React, React Native, HTML5, CSS, Tailwind, Styled
                Components, Vanilla Extract
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-yellow-600">Backend</td>
              <td className="px-4 py-3 text-white">Building APIs, REST, SQL, NoSQL</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-yellow-600">CMS</td>
              <td className="px-4 py-3 text-white">WordPress, Payload, Storyblok</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-yellow-600">Languages</td>
              <td className="px-4 py-3 text-white">JavaScript, TypeScript</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-white">
        Over time, I have built several projects, including a{" "}
        <span className="font-semibold">gaming app</span>, an{" "}
        <span className="font-semibold">e-commerce candy store</span>, and a{" "}
        <span className="font-semibold">multiplayer game</span>. While I love
        frontend development and crafting engaging user interfaces, I have found
        that backend development, especially{" "}
        <span className="font-semibold">building APIs</span>, is where I have
        the most fun.
      </p>
    </div>
  );
}
