import { Project } from "@/app/types/types";

export const projectsData: Project[] = [
  {
    title: 'Project One',
    description:
      'A web app built with Next.js and Tailwind for showcasing minimal design.',
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript'],
    demoLink: 'https://example.com/project-one',
    repoLink: 'https://github.com/your-username/project-one',
    image: '/images/project1.jpg',
  },
  {
    title: 'Project Two',
    description:
      'A React-based dashboard with dynamic charts and data visualization.',
    techStack: ['React', 'Chart.js', 'CSS Modules'],
    demoLink: 'https://example.com/project-two',
    repoLink: 'https://github.com/your-username/project-two',
    image: '/images/project2.jpg',
  },
]