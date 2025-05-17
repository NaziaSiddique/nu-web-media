export default function Hero() {
    return (
      <section className="h-[90vh] flex flex-col justify-center items-center bg-black text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Let’s Build Something<br />
          <span className="text-red-600">Stunning</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Modern websites for businesses of all sizes. Clean. Scalable. Designed to convert.
        </p>
        <a href="#contact" className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg transition">
          Get in Touch
        </a>
      </section>
    );
  }
  