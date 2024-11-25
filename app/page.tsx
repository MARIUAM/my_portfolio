import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Maryam{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Saleem
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hi, I'm Maryam Saleem, a passionate web developer and graphic designer. I specialize
            in crafting user-friendly and visually appealing websites using modern tools and
            technologies. I love collaborating on projects that make an impact.
          </p>
        </div>




        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-sky-400 to-blue-600" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Project {i}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects#project-${i}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/MARIUAM" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/maryam-saleem-b5696b323?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BLrU4M%2BTR6uscMgbWAUvbA%3D%3D" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/contact">
                <Mail className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}