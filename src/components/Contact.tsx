"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mpwdbkoj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white text-black py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-10">
          Let us know what you need — and we’ll get back to you fast.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-4 border border-zinc-300 rounded"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-4 border border-zinc-300 rounded"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Contact Number"
              className="p-4 border border-zinc-300 rounded col-span-2 md:col-span-1"
              onChange={handleChange}
              value={formData.phone || ""}
            />
          </div>

          <select
            name="service"
            required
            className="w-full p-4 border border-zinc-300 rounded bg-white"
            onChange={handleChange}
            value={formData.service}>
            <option value="">What service are you after?</option>
            <option value="Web Design">Web Design</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Maintenance">Maintenance & Hosting</option>
            <option value="SEO">SEO & Optimization</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us a bit more about your project or goals..."
            className="w-full p-4 border border-zinc-300 rounded"
            onChange={handleChange}
            value={formData.message}></textarea>

          <input type="text" name="_gotcha" className="hidden" />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
