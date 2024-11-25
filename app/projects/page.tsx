"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart and checkout functionality.",
    image: "https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates.",
    image: "https://projectsly.com/images/task-management-app-screenshot-1.png?v=1691124479409199525",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Watch Website",
    description: "A modern portfolio website showcasing projects and skills.",
    image: "https://imockups.com/storage/product/3992/6Jd30sz515nX3zKOv25o.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills.",
    image: "https://market-resized.envatousercontent.com/previews/files/512955282/01-preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=80b3c188b7f8a4bd1d23332f7804b45502910345e19edc7db4b2630efebf5661",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Countdown Timmer",
    description: "A modern portfolio website showcasing projects and skills.",
    image: "https://t3.ftcdn.net/jpg/03/12/95/72/360_F_312957201_nwuPklullE9qNAFov708ixqjfukfjJGN.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },


  {
    title: "Resturent Website",
    description: "A modern portfolio website showcasing projects and skills.",
    image: "https://vrtechinfo.com/public/uploads/portfolio-22.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },


  {
    title: "coofee Website",
    description: "A modern portfolio website showcasing projects and skills.",
    image: "https://www.sliderrevolution.com/wp-content/uploads/2021/10/Cafenod.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Book store Website",
    description: "A modern portfolio website showcasing projects and skills.",
    image: "https://t4.ftcdn.net/jpg/05/79/06/47/360_F_579064714_fA00wmkzAI9GjcgR1waJwvMDRaFFozPJ.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },

];

export default function Projects() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my latest work and side projects
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}