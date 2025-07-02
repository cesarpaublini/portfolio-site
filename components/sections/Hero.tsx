// components/sections/Hero.tsx
import GridBackground from "@/components/GridBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            {`Hey, I'm`} <span className="text-indigo-400">Cesar</span><br />
            <span className="text-zinc-400">A Creative Technologist</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            Passionate about turning ideas into immersive digital experiences. I work at the intersection of creativity, technology, and impact.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
