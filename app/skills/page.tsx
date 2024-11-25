"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Smartphone,
  Terminal,
  TestTube,
  Workflow,
} from "lucide-react";

const skills = [
  { name: "Frontend", icon: Layout, color: "text-sky-500" },
  { name: "Backend", icon: Server, color: "text-green-500" },
  { name: "Database", icon: Database, color: "text-purple-500" },
  { name: "DevOps", icon: Settings, color: "text-orange-500" },
  { name: "Testing", icon: TestTube, color: "text-red-500" },
  { name: "Mobile", icon: Smartphone, color: "text-blue-500" },
  { name: "API", icon: Globe, color: "text-teal-500" },
  { name: "CLI", icon: Terminal, color: "text-gray-500" },
  { name: "Code", icon: Code2, color: "text-indigo-500" },
  { name: "Workflow", icon: Workflow, color: "text-pink-500" },
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "State Management",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "Authentication",
      "Database Design",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git/GitHub",
      "Docker",
      "CI/CD",
      "AWS",
      "Linux",
      "Monitoring & Logging",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Communication",
      "Agile Methodology",
      "Time Management",
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <skill.icon className={`h-12 w-12 ${skill.color} mb-4`} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Skill Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}