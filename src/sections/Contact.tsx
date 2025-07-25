'use client';

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'mailto:' + ['19141558', 'brookes.ac.uk'].join('@');
  };

  const sanitizeInput = (input: string) => {
    return input.replace(/<[^>]+>|javascript:|data:|http[s]?:\/\/|www\./gi, '').trim();
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const message = sanitizeInput(formData.message);

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Replace with actual submission logic
    console.log('Sending:', { name, email, message });

    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="w-full h-full px-6 py-16 flex flex-col items-center justify-center scroll-mt-20 snap-start"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="flex-1 flex flex-col self-start pt-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a recruiter, fellow developer, or just curious about my work — feel free to connect with me!
          </p>

          <div className="flex flex-col space-y-4 text-black text-lg">
            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="text-2xl mr-3 text-blue-600" />
              <a href="#" onClick={handleEmailClick} className="hover:underline">
                Email
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center">
              <FaGithub className="text-2xl mr-3 text-gray-800" />
              <a
                href="https://github.com/RjSup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center">
              <FaLinkedin className="text-2xl mr-3 text-blue-700" />
              <a
                href="https://www.linkedin.com/in/rjsup/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col self-start">
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">Message sent successfully!</p>}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-black rounded-md px-4 py-2 bg-[#DFE0DA] focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-black rounded-md px-4 py-2 bg-[#DFE0DA] focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-black rounded-md px-4 py-2 bg-[#DFE0DA] focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4169E1] text-white py-2 px-4 rounded-md hover:bg-[#3652B1] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
