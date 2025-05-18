import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    alert('Form submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded bg-gray-700 text-white"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 space-y-4">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-indigo-400" />
            Email:{' '}
            <a
              href="mailto:abhishekboora2001@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              abhishekboora2001@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaWhatsapp className="text-indigo-400" />
            WhatsApp:{' '}
            <a
              href="https://wa.me/9306098396"
              className="text-indigo-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9306098396
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaGithub className="text-indigo-400" />
            GitHub:{' '}
            <a
              href="https://github.com/abhishekboora"
              className="text-indigo-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/abhishekboora
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-indigo-400" />
            Address: Delhi, India
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;