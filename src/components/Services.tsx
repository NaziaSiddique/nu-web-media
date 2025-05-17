const services = [
    {
      title: "Web Design",
      desc: "Custom designs tailored to your brand, focused on beauty and usability.",
    },
    {
      title: "E-Commerce",
      desc: "Launch your online store with secure, scalable, and stylish solutions.",
    },
    {
      title: "Maintenance & Hosting",
      desc: "Ongoing support and managed hosting to keep your site fast and secure.",
    },
    {
      title: "SEO & Optimization",
      desc: "Rank higher and load faster with performance and SEO best practices.",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-red-600">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-red-600 transition-shadow">
                <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-zinc-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  