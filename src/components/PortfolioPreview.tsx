export default function PortfolioPreview() {
    return (
      <section id="portfolio" className="bg-black text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Our Work</h2>
          <p className="text-lg mb-8 text-zinc-300">
            We showcase most of our latest projects on Instagram. Tap below to explore what we’ve been building.
          </p>
          <a
            href="https://www.instagram.com/nu_media1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
          >
            View on Instagram
          </a>
        </div>
      </section>
    );
  }
  