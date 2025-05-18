import { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct WhatsApp message
    const whatsappMessage = `New message from ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    const whatsappUrl = `https://wa.me/+919306098396?text=${encodeURIComponent(whatsappMessage)}`;
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    // Reset form
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded bg-gray-200 text-gray-800"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded bg-gray-200 text-gray-800"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded bg-gray-200 text-gray-800"
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
        <div className="mt-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/+919306098396"
              className="text-green-500 hover:text-green-400 transition-colors drop-shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekboora/"
              className="text-blue-700 hover:text-blue-600 transition-colors drop-shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/abhishekboora"
              className="text-gray-900 hover:text-gray-700 transition-colors drop-shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
          <p className="mt-4 text-gray-800 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-gray-800 text-xl" />
            Delhi, India
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;