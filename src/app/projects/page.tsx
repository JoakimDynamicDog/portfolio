import { projectsData } from "@/app/data/data";

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h2 className="mb-6 text-3xl font-bold">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded border border-gray-200"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <p className="mb-4 text-sm text-gray-600">
                Tech Stack: {project.techStack.join(', ')}
              </p>
              <div className="flex space-x-4 text-sm">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
