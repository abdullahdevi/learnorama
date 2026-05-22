import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f9fafb', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0F6E56 0%, #1e40af 100%)', padding: '80px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', marginBottom: '16px' }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
          Have a question, feedback, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 32px', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px', alignItems: 'start' }}>

        {/* LEFT — contact info */}
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em', marginBottom: '8px' }}>Contact Info</h2>
          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.7, marginBottom: '32px' }}>
            Reach out any time. We typically respond within 24 hours.
          </p>

          {[
            { icon: '📧', label: 'Email', value: 'hello@learnorama.dev' },
            { icon: '🐦', label: 'Twitter', value: '@learnorama' },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/company/learnorama' },
            { icon: '📍', label: 'Based in', value: 'Remote — worldwide' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '24px' }}>
              <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{item.label}</p>
                <p style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>{item.value}</p>
              </div>
            </div>
          ))}

          {/* FAQ shortcut */}
          <div style={{ marginTop: '40px', padding: '20px', background: 'white', borderRadius: '14px', border: '0.5px solid #e5e7eb' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>Looking for quick answers?</p>
            <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, marginBottom: '12px' }}>
              Check out the courses — most common questions are answered inside the lessons.
            </p>
            <Link to="/courses/programming" style={{ fontSize: '13px', fontWeight: '600', color: '#0F6E56', textDecoration: 'none' }}>
              Browse courses →
            </Link>
          </div>
        </div>

        {/* RIGHT — form */}
        <div style={{ background: 'white', borderRadius: '18px', border: '0.5px solid #e5e7eb', padding: '40px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>Message sent!</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.7 }}>
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                style={{ marginTop: '24px', fontSize: '13px', fontWeight: '600', color: '#0F6E56', background: 'none', border: 'none', cursor: 'pointer' }}>
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em', marginBottom: '24px' }}>Send a message</h2>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Name</label>
                    <input
                      name="name" type="text" placeholder="Your name"
                      value={formData.name} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 14px', border: '0.5px solid #d1d5db', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Email</label>
                    <input
                      name="email" type="email" placeholder="you@example.com"
                      value={formData.email} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 14px', border: '0.5px solid #d1d5db', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Subject</label>
                  <input
                    name="subject" type="text" placeholder="What's this about?"
                    value={formData.subject} onChange={handleChange} required
                    style={{ width: '100%', padding: '10px 14px', border: '0.5px solid #d1d5db', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Message</label>
                  <textarea
                    name="message" placeholder="Write your message here..."
                    value={formData.message} onChange={handleChange} required rows={6}
                    style={{ width: '100%', padding: '10px 14px', border: '0.5px solid #d1d5db', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>

                <button type="submit" disabled={loading}
                  style={{ width: '100%', background: loading ? '#9ca3af' : '#0F6E56', color: 'white', fontWeight: '700', fontSize: '14px', padding: '14px', borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '0.5px solid #e5e7eb', background: '#060a08', padding: '40px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ fontSize: '15px', fontWeight: '500', color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.02em' }}>learn</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#5DCAA5', letterSpacing: '-0.02em' }}>orama</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>.</span>
          </div>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>© 2024 Learnorama. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Programming', 'Cloud', 'Database'].map(c => (
              <Link key={c} to={`/courses/${c.toLowerCase()}`} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{c}</Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Contact;