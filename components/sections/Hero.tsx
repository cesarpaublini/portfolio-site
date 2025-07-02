// components/sections/Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen flex items-center justify-center px-6 text-center"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_60%)]"></div>
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0f_1px,_transparent_1px)]"
          style={{
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
      </div>

      <div className="max-w-4xl">
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
    </section>
  )
}
