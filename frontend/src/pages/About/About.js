import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SYS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const VALUES = [
  { icon: '◎', title: 'Learn by doing', desc: 'Every course is built around practical skills you can apply immediately — not theory for the sake of theory.' },
  { icon: '◈', title: 'Structured clarity', desc: 'No more jumping between random tutorials. Every topic has a clear path from beginner to confident.' },
  { icon: '◐', title: 'Free to start', desc: 'We believe access to quality education shouldn\'t be locked behind a paywall. Start for free, always.' },
  { icon: '◇', title: 'Built for developers', desc: 'Every lesson, quiz, and project is designed with real developer workflows and interviews in mind.' },
];

const STATS = [
  { num: '12+', label: 'Courses' },
  { num: '60+', label: 'Lessons' },
  { num: '3', label: 'Categories' },
  { num: '100%', label: 'Free to start' },
];

const TEAM = [
  { name: 'Abdul', role: 'Founder & Developer', color: '#0F6E56', letter: 'A' },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div style={{ fontFamily: SYS, background: '#fafaf9', minHeight: '100vh' }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(1.6);opacity:0} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .value-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .value-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        .back-link:hover { color: rgba(255,255,255,0.8) !important; }
      `}</style>

      {/* HERO HEADER */}
      <section style={{ padding: '64px 32px 72px', position: 'relative', overflow: 'hidden', background: '#0a0f0d', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle, #0F6E5633 0%, transparent 70%)', top: '-100px', left: '-80px', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 56, height: 56, border: '1.5px solid rgba(29,158,117,0.2)', borderRadius: '50%', animation: 'float 5s ease-in-out infinite' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <Link to="/" className="back-link" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px', transition: 'color 0.15s ease' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Home
          </Link>

          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease 0.1s' }}>
            <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>About us</p>
            <h1 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '20px' }}>
              Built for developers<br /><span style={{ color: '#5DCAA5' }}>who mean business.</span>
            </h1>
            <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '520px', lineHeight: 1.7 }}>
              Learnorama was created out of frustration with scattered, low-quality learning resources. We built the platform we wished existed when we were starting out.
            </p>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#0F6E56', padding: '9px 0', overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 28s linear infinite' }}>
            {[...Array(2)].map((_, rep) =>
              ['HTML', 'CSS', 'JavaScript', 'AWS', 'Docker', 'SQL', 'MongoDB', 'CI/CD', 'Python', 'Node.js', 'Git', 'REST APIs'].map((t, i) => (
                <span key={`${rep}-${i}`} style={{ whiteSpace: 'nowrap', padding: '0 32px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', marginRight: '8px' }}>◆</span>{t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* MISSION */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Our mission</p>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
              Make quality tech education accessible to everyone.
            </h2>
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.8, marginBottom: '16px' }}>
              Too many developers get stuck watching the same YouTube tutorials on repeat, jumping between a dozen different resources, never feeling like they're making real progress.
            </p>
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.8 }}>
              Learnorama gives you a structured path — from the basics to production-ready skills — with quizzes to prove your understanding and a dashboard to track your growth.
            </p>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {STATS.map((s, i) => (
              <div key={i} className="value-card" style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '38px', fontWeight: '800', color: '#0F6E56', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: 'white', borderTop: '0.5px solid #f3f4f6', borderBottom: '0.5px solid #f3f4f6', padding: '96px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>What we stand for</p>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em' }}>Our values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {VALUES.map((v, i) => (
              <div key={i} className="value-card" style={{ background: '#fafaf9', border: '0.5px solid #e5e7eb', borderRadius: '16px', padding: '28px' }}>
                <div style={{ fontSize: '24px', color: '#0F6E56', marginBottom: '14px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>The people</p>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em' }}>Who built this</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {TEAM.map((member, i) => (
            <div key={i} className="value-card" style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '16px', padding: '32px 40px', textAlign: 'center', minWidth: '200px' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: member.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '700', color: 'white', margin: '0 auto 16px' }}>
                {member.letter}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{member.name}</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a0f0d', padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
            Ready to start learning?
          </h2>
          <p style={{ fontSize: '15px', color: '#6b7280', marginBottom: '32px', lineHeight: 1.7 }}>
            Join learners already building real skills on Learnorama.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', fontWeight: '600', fontSize: '14px', padding: '14px 28px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Get started free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)', color: 'white', fontWeight: '500', fontSize: '14px', padding: '14px 28px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)' }}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '0.5px solid #e5e7eb', background: '#060a08', padding: '40px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
}