import React, { useState } from 'react';
import '..styles/Contact.css';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    toast.success('Message submitted successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out with questions, suggestions, or partnership inquiries.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn send-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: <a href="mailto:madarakalincoln48@gmail.com">madarakalincoln48@gmail.com</a></p>
        <p>Phone: <a href="tel:+254759725607">+254 759 725607</a></p>
      </div>
    </motion.div>
  );
};

export default Contact;
