import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CATEGORY_META = {
  programming: {
    label: 'Programming',
    sub: 'JavaScript, Python, HTML, algorithms and more',
    color: '#0F6E56',
    bg: '#E1F5EE',
    lightBg: '#f0faf5',
    icon: '< >',
  },
  cloud: {
    label: 'Cloud',
    sub: 'AWS, Docker, CI/CD, deployment and infrastructure',
    color: '#185FA5',
    bg: '#E6F1FB',
    lightBg: '#f0f7ff',
    icon: '☁',
  },
  database: {
    label: 'Databases',
    sub: 'SQL, MongoDB, indexing, scaling and database design',
    color: '#534AB7',
    bg: '#EEEDFE',
    lightBg: '#f5f4ff',
    icon: '⊞',
  },
};

const SYS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const Courses = () => {
  const { category } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const meta = CATEGORY_META[category] || CATEGORY_META.programming;

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get(`http://localhost:5000/api/courses/${category}`)
      .then(res => { setCourses(res.data); setLoading(false); })
      .catch(() => { setError('Failed to load courses.'); setLoading(false); });
  }, [category]);

  return (
    <div style={{ fontFamily: SYS, background: '#fafaf9', minHeight: '100vh' }}>
      <style>{`
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .course-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .course-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .back-link:hover { color: rgba(255,255,255,0.8) !important; }
      `}</style>

      {/* HERO HEADER */}
      <section style={{ padding: '64px 32px 72px', position: 'relative', overflow: 'hidden', background: '#0a0f0d', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400,
          background: `radial-gradient(circle, ${meta.color}33 0%, transparent 70%)`,
          top: '-100px', left: '-80px', borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <Link to="/" className="back-link" style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px',
            transition: 'color 0.15s ease',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
            <div style={{
              width: 56, height: 56, background: meta.bg, borderRadius: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', fontWeight: '700', color: meta.color,
            }}>
              {meta.icon}
            </div>
            <div>
              <p style={{ fontSize: '12px', color: meta.color, fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                Course category
              </p>
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
                {meta.label}<span style={{ color: meta.color }}>.</span>
              </h1>
            </div>
          </div>
          <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '480px', lineHeight: 1.6, marginTop: '8px' }}>
            {meta.sub}
          </p>
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

      {/* COURSE GRID */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px' }}>

        {loading && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '16px', height: '220px', opacity: 0.5 }} />
            ))}
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#ef4444', fontSize: '15px' }}>{error}</p>
          </div>
        )}

        {!loading && !error && courses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#9ca3af', fontSize: '15px' }}>No courses found in this category.</p>
          </div>
        )}

        {!loading && !error && courses.length > 0 && (
          <>
            <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '32px', fontWeight: '500' }}>
              {courses.length} course{courses.length !== 1 ? 's' : ''} available
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
              {courses.map((course) => (
                <Link key={course._id} to={`/lesson/${course._id}`} style={{ textDecoration: 'none' }}>
                  <div className="course-card" style={{
                    background: 'white',
                    border: '0.5px solid #e5e7eb',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}>

                    {/* Card top — dark colored */}
                    <div style={{ background: meta.color, padding: '24px 24px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div style={{
                          width: 40, height: 40,
                          background: 'rgba(255,255,255,0.15)',
                          borderRadius: '10px', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: 'white',
                        }}>
                          {meta.icon}
                        </div>
                        <span style={{
                          fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '99px',
                          background: 'rgba(255,255,255,0.15)',
                          color: 'white',
                          border: '0.5px solid rgba(255,255,255,0.25)',
                        }}>
                          {course.isPremium ? '★ Premium' : 'Free'}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                        {course.description || `${course.lessons?.length || 0} structured lessons`}
                      </p>
                    </div>

                    {/* Card bottom — white */}
                    <div style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>{course.lessons?.length || 0} lessons</span>
                      </div>
                      <span style={{ fontSize: '13px', color: meta.color, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Start learning
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '0.5px solid #e5e7eb', background: '#060a08', padding: '40px 32px', marginTop: '40px' }}>
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
};

export default Courses;