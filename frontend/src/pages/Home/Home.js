import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const COURSES = [
  { title: 'HTML Basics', category: 'Programming', lessons: 5, color: '#0F6E56', bg: '#E1F5EE', icon: '< >' },
  { title: 'CSS Fundamentals', category: 'Programming', lessons: 5, color: '#0F6E56', bg: '#E1F5EE', icon: '{ }' },
  { title: 'JavaScript Essentials', category: 'Programming', lessons: 5, color: '#0F6E56', bg: '#E1F5EE', icon: 'JS' },
  { title: 'AWS Fundamentals', category: 'Cloud', lessons: 5, color: '#185FA5', bg: '#E6F1FB', icon: '☁' },
  { title: 'Docker & Containers', category: 'Cloud', lessons: 5, color: '#185FA5', bg: '#E6F1FB', icon: '⬡' },
  { title: 'SQL Basics', category: 'Database', lessons: 5, color: '#534AB7', bg: '#EEEDFE', icon: '⊞' },
  { title: 'MongoDB Essentials', category: 'Database', lessons: 5, color: '#534AB7', bg: '#EEEDFE', icon: '{}' },
];

const FEATURES = [
  { icon: '◎', title: 'Structured paths', desc: 'Every course is broken into bite-sized lessons so you always know your next step.' },
  { icon: '◈', title: 'Quiz-based progress', desc: 'Prove understanding with quizzes before moving on. Real learning, not just reading.' },
  { icon: '◐', title: 'Track everything', desc: 'Your dashboard shows exactly where you are across every course and category.' },
  { icon: '◇', title: 'Free to start', desc: "Every foundational lesson is free. Unlock advanced content when you're ready." },
];

const STATS = [
  { num: '12+', label: 'Courses' },
  { num: '60+', label: 'Lessons' },
  { num: '3', label: 'Categories' },
  { num: '100%', label: 'Free to start' },
];

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const AnimatedSection = ({ children, delay = 0, style = {} }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
};

const SYS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const carouselRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setSlideIndex(i => (i + 1) % COURSES.length), 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveFeature(i => (i + 1) % FEATURES.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const cardWidth = 280;
  const gap = 16;

  return (
    <div style={{ fontFamily: SYS, background: '#fafaf9', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(1.6);opacity:0} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        .course-card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .course-card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        .cta-btn { transition: all 0.2s ease; }
        .cta-btn:hover { transform: translateY(-1px); }
        .feature-tab { transition: all 0.2s ease; cursor: pointer; }
        .feature-tab:hover { background: #f3f4f6; }
        .stat-card { transition: transform 0.2s ease; }
        .stat-card:hover { transform: scale(1.03); }
        .ticker-wrap { overflow: hidden; width: 100%; }
        .ticker-inner { display: flex; width: max-content; animation: ticker 28s linear infinite; }
        .ticker-item { white-space: nowrap; padding: 0 32px; font-size: 13px; font-weight: 500; }
        .ticker-dot { margin-right: 8px; }
        .orb { position: absolute; border-radius: 50%; pointer-events: none; }
      `}</style>

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0a0f0d' }}>

        {/* Parallax orbs */}
        <div className="orb" style={{
          width: 500, height: 500, background: 'radial-gradient(circle, rgba(15,110,86,0.35) 0%, transparent 70%)',
          top: '-100px', left: '-100px',
          transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
          transition: 'transform 0.8s ease',
        }} />
        <div className="orb" style={{
          width: 400, height: 400, background: 'radial-gradient(circle, rgba(29,158,117,0.2) 0%, transparent 70%)',
          bottom: '-80px', right: '-80px',
          transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)`,
          transition: 'transform 1s ease',
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Floating accent shapes */}
        <div style={{ position: 'absolute', top: '18%', right: '12%', width: 64, height: 64, border: '1.5px solid rgba(29,158,117,0.3)', borderRadius: '50%', animation: 'float 5s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '22%', right: '13.5%', width: 64, height: 64, border: '1.5px solid rgba(29,158,117,0.15)', borderRadius: '50%', animation: 'pulse-ring 2.5s ease-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '25%', left: '8%', width: 40, height: 40, border: '1px solid rgba(93,202,165,0.2)', borderRadius: '4px', animation: 'spin-slow 12s linear infinite' }} />

        {/* Hero content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }}>
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(29,158,117,0.12)', border: '0.5px solid rgba(29,158,117,0.25)',
              borderRadius: '99px', padding: '5px 14px', marginBottom: '28px',
              opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(16px)',
              transition: 'all 0.6s ease 0.1s',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', animation: 'pulse-ring 2s ease-out infinite' }} />
              <span style={{ fontSize: '12px', color: '#5DCAA5', fontWeight: '500', letterSpacing: '0.04em' }}>Free learning platform</span>
            </div>

            {/* Headline — system font, heavy weight */}
            <h1 style={{
              fontFamily: SYS,
              fontSize: 'clamp(42px, 5.5vw, 72px)',
              fontWeight: '800',
              color: 'white',
              lineHeight: 1.08,
              marginBottom: '24px',
              letterSpacing: '-0.03em',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(24px)',
              transition: 'all 0.7s ease 0.2s',
            }}>
              Master the skills<br />
              <span style={{ color: '#5DCAA5', fontWeight: '700' }}>that get you hired.</span>
            </h1>

            <p style={{
              fontFamily: SYS,
              fontSize: '17px', color: '#9ca3af', lineHeight: 1.7, maxWidth: '460px',
              marginBottom: '40px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(24px)',
              transition: 'all 0.7s ease 0.35s',
            }}>
              Structured courses in Programming, Cloud, and Databases —
              built for developers who want to grow fast and build real things.
            </p>

            <div style={{
              display: 'flex', gap: '12px', flexWrap: 'wrap',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(24px)',
              transition: 'all 0.7s ease 0.5s',
            }}>
              <Link to="/courses/programming" className="cta-btn" style={{
                textDecoration: 'none', background: '#0F6E56',
                color: 'white', fontWeight: '600', fontSize: '14px',
                padding: '14px 28px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                Browse courses
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/register" className="cta-btn" style={{
                textDecoration: 'none',
                border: '0.5px solid rgba(255,255,255,0.15)',
                color: 'white', fontWeight: '500', fontSize: '14px',
                padding: '14px 28px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)',
              }}>
                Get started free
              </Link>
            </div>

            {/* Social proof */}
            <div style={{
              marginTop: '48px', display: 'flex', alignItems: 'center', gap: '16px',
              opacity: heroVisible ? 1 : 0, transition: 'all 0.7s ease 0.65s',
            }}>
              <div style={{ display: 'flex' }}>
                {['#1D9E75','#0F6E56','#5DCAA5','#085041'].map((c, i) => (
                  <div key={i} style={{
                    width: 30, height: 30, borderRadius: '50%', background: c,
                    border: '2px solid #0a0f0d', marginLeft: i === 0 ? 0 : -8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', color: 'white', fontWeight: '600',
                  }}>{['A','B','C','D'][i]}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '13px', color: 'white', fontWeight: '500' }}>Join thousands of learners</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>building skills every day</div>
              </div>
            </div>
          </div>

          {/* Hero right: animated course cards stack */}
          <div style={{
            position: 'relative', height: '420px',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'none' : 'translateX(40px)',
            transition: 'all 0.8s ease 0.4s',
          }}>
            {COURSES.slice(0, 4).map((course, i) => {
              const isActive = i === slideIndex % 4;
              return (
                <div key={i} style={{
                  position: 'absolute', top: `${i * 18}px`, left: `${i * 6}px`, right: `${-i * 6}px`,
                  background: isActive ? '#fff' : `rgba(255,255,255,${0.04 + i * 0.02})`,
                  border: isActive ? 'none' : '0.5px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: '20px 24px',
                  transform: `scale(${1 - i * 0.03}) translateY(${i * 2}px)`,
                  zIndex: 4 - i,
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}>
                  {isActive && (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: 36, height: 36, background: course.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', color: course.color }}>{course.icon}</div>
                          <div>
                            <div style={{ fontFamily: SYS, fontSize: '14px', fontWeight: '600', color: '#111827' }}>{course.title}</div>
                            <div style={{ fontSize: '11px', color: '#6b7280' }}>{course.category}</div>
                          </div>
                        </div>
                        <div style={{ background: course.bg, color: course.color, fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '99px' }}>Free</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                        {['Introduction', 'Core concepts', 'Hands-on practice'].map((l, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: 18, height: 18, borderRadius: '50%', background: j === 0 ? course.color : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {j === 0 && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                            </div>
                            <span style={{ fontSize: '12px', color: j === 0 ? '#374151' : '#9ca3af' }}>{l}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>{course.lessons} lessons</span>
                        <span style={{ fontSize: '12px', color: course.color, fontWeight: '600' }}>Start →</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
            <div style={{ position: 'absolute', bottom: '-28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
              {COURSES.slice(0, 4).map((_, i) => (
                <div key={i} onClick={() => setSlideIndex(i)} style={{
                  width: slideIndex % 4 === i ? 20 : 6, height: 6,
                  borderRadius: '99px', background: slideIndex % 4 === i ? '#1D9E75' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          opacity: heroVisible ? 0.5 : 0, transition: 'opacity 1s ease 1.2s',
        }}>
          <span style={{ fontSize: '11px', color: '#6b7280', letterSpacing: '0.08em' }}>SCROLL</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #6b7280, transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#0F6E56', padding: '10px 0', overflow: 'hidden' }}>
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...Array(2)].map((_, rep) =>
              ['HTML', 'CSS', 'JavaScript', 'AWS', 'Docker', 'SQL', 'MongoDB', 'CI/CD', 'Python', 'Node.js', 'Git', 'REST APIs'].map((t, i) => (
                <span key={`${rep}-${i}`} className="ticker-item" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span className="ticker-dot" style={{ color: 'rgba(255,255,255,0.4)' }}>◆</span>{t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* STATS */}
      <section style={{ background: 'white', borderBottom: '0.5px solid #f3f4f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#f3f4f6' }}>
          {STATS.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="stat-card" style={{ background: 'white', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontFamily: SYS, fontSize: '42px', fontWeight: '800', color: '#0F6E56', lineHeight: 1, marginBottom: '6px', letterSpacing: '-0.03em' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px' }}>
        <AnimatedSection>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>What you'll learn</p>
              <h2 style={{ fontFamily: SYS, fontSize: '40px', fontWeight: '800', color: '#111827', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
                Three categories.<br /><span style={{ color: '#0F6E56' }}>One platform.</span>
              </h2>
            </div>
            <Link to="/courses/programming" style={{ fontSize: '13px', color: '#0F6E56', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              All courses <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { label: 'Programming', sub: 'JS, Python, HTML, algorithms', path: '/courses/programming', color: '#0F6E56', bg: '#E1F5EE', lightBg: '#f0faf5', courses: 4, icon: '< >' },
            { label: 'Cloud', sub: 'AWS, Docker, CI/CD, deployment', path: '/courses/cloud', color: '#185FA5', bg: '#E6F1FB', lightBg: '#f0f7ff', courses: 4, icon: '☁' },
            { label: 'Databases', sub: 'SQL, MongoDB, indexing, scaling', path: '/courses/database', color: '#534AB7', bg: '#EEEDFE', lightBg: '#f5f4ff', courses: 4, icon: '⊞' },
          ].map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <Link to={cat.path} className="course-card-hover" style={{ textDecoration: 'none', display: 'block', background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ background: cat.lightBg, padding: '32px 28px 24px' }}>
                  <div style={{ width: 48, height: 48, background: cat.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '700', color: cat.color, marginBottom: '16px' }}>{cat.icon}</div>
                  <h3 style={{ fontFamily: SYS, fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '6px', letterSpacing: '-0.02em' }}>{cat.label}</h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{cat.sub}</p>
                </div>
                <div style={{ padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '0.5px solid #f3f4f6' }}>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>{cat.courses} courses available</span>
                  <span style={{ fontSize: '13px', color: cat.color, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* COURSE CAROUSEL */}
      <section style={{ background: '#f9fafb', padding: '96px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', marginBottom: '40px' }}>
          <AnimatedSection>
            <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>All courses</p>
            <h2 style={{ fontFamily: SYS, fontSize: '40px', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em' }}>Start learning today</h2>
          </AnimatedSection>
        </div>
        <div ref={carouselRef} style={{ display: 'flex', gap: `${gap}px`, padding: '8px 32px 16px', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
          {COURSES.map((course, i) => (
            <div key={i} className="course-card-hover" style={{ minWidth: `${cardWidth}px`, background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '14px', padding: '20px', scrollSnapAlign: 'start', flexShrink: 0 }}>
              <div style={{ width: 40, height: 40, background: course.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: course.color, marginBottom: '14px' }}>{course.icon}</div>
              <div style={{ fontSize: '11px', color: course.color, fontWeight: '600', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{course.category}</div>
              <div style={{ fontFamily: SYS, fontSize: '15px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>{course.title}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>{course.lessons} lessons</span>
                <span style={{ fontSize: '11px', background: course.bg, color: course.color, padding: '3px 8px', borderRadius: '99px', fontWeight: '600' }}>Free</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px' }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Why Learnorama</p>
            <h2 style={{ fontFamily: SYS, fontSize: '40px', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em' }}>Built for real learning</h2>
          </div>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {FEATURES.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="feature-tab" onClick={() => setActiveFeature(i)} style={{
                padding: '28px 32px', borderRadius: '14px',
                border: activeFeature === i ? '1.5px solid #1D9E75' : '0.5px solid #e5e7eb',
                background: activeFeature === i ? '#f0faf5' : 'white',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ fontSize: '22px', marginBottom: '12px', color: activeFeature === i ? '#0F6E56' : '#9ca3af' }}>{f.icon}</div>
                <h3 style={{ fontFamily: SYS, fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: '#0a0f0d', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: SYS, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '800', color: 'white', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.03em' }}>
              Ready to start<br /><span style={{ color: '#5DCAA5' }}>building your future?</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '36px', lineHeight: 1.7 }}>
              Create a free account and start your first course in under a minute.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register" className="cta-btn" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', fontWeight: '600', fontSize: '14px', padding: '16px 32px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Create free account
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/courses/programming" className="cta-btn" style={{ textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)', color: 'white', fontWeight: '500', fontSize: '14px', padding: '16px 32px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)' }}>
                Browse courses
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#060a08', padding: '40px 32px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0px' }}>
            <span style={{ fontSize: '15px', fontWeight: '500', color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.02em' }}>learn</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#5DCAA5', letterSpacing: '-0.02em' }}>orama</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'white', letterSpacing: '-0.02em' }}>.</span>
          </div>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2024 Learnorama. All rights reserved.</span>
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