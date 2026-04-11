import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${config.API_URL}/api/contact`, form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <div className="contact-section-inner">
        <div className="contact-form">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="status-msg">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;