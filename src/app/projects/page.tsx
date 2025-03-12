"use client";

import Image from "next/image"
import { projectsData } from "@/app/data/data"

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h2 className="mb-6 heading-small">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projectsData.map((project, index) => {

          const isOdd = projectsData.length % 2 !== 0;

          return (
            <div
              key={project.title}
              className={`overflow-hidden rounded border border-yellow-600 ${
                isOdd && index === projectsData.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-yellow-500">
                  {project.title}
                </h3>
                <p className="mb-2 text-white">{project.description}</p>
                <p className="mb-4 text-sm text-yellow-700">
                  Tech Stack: {project.techStack.join(", ")}
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
          )
        })}
      </div>
    </div>
  )
}
