import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SYS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const RESOURCES = [
  {
    category: 'Programming',
    color: '#0F6E56',
    bg: '#E1F5EE',
    icon: '< >',
    items: [
      { title: 'MDN Web Docs', desc: 'The definitive reference for HTML, CSS, and JavaScript. Maintained by Mozilla — the most trusted source for web standards.', url: 'https://developer.mozilla.org', tag: 'Documentation' },
      { title: 'JavaScript.info', desc: 'The most comprehensive and modern JavaScript tutorial on the internet. Goes from basics to advanced topics with clear examples.', url: 'https://javascript.info', tag: 'Tutorial' },
      { title: 'Python Docs', desc: 'Official Python documentation with tutorials, library references, and language guides for all skill levels.', url: 'https://docs.python.org', tag: 'Documentation' },
      { title: 'CS50 by Harvard', desc: 'Harvard\'s legendary introduction to computer science. Free on edX. Covers C, Python, SQL, JavaScript — genuinely life-changing for beginners.', url: 'https://cs50.harvard.edu', tag: 'Course' },
      { title: 'The Odin Project', desc: 'A free, open-source full-stack curriculum. One of the most complete self-paced paths from zero to employable developer.', url: 'https://www.theodinproject.com', tag: 'Curriculum' },
      { title: 'Fireship on YouTube', desc: 'Fast-paced, high-quality videos covering modern web dev topics in 100 seconds or full tutorials. Essential viewing.', url: 'https://www.youtube.com/@Fireship', tag: 'YouTube' },
    ],
  },
  {
    category: 'Cloud',
    color: '#185FA5',
    bg: '#E6F1FB',
    icon: '☁',
    items: [
      { title: 'AWS Documentation', desc: 'Official AWS docs covering every service in depth. Start with the "Getting Started" guides for EC2, S3, and Lambda.', url: 'https://docs.aws.amazon.com', tag: 'Documentation' },
      { title: 'Cloud Resume Challenge', desc: 'A hands-on project that teaches AWS fundamentals by having you build and deploy a real resume site. Great for beginners.', url: 'https://cloudresumechallenge.dev', tag: 'Project' },
      { title: 'Docker Docs', desc: 'Official Docker documentation. The "Get Started" guide walks you through containers, images, and Docker Compose from scratch.', url: 'https://docs.docker.com', tag: 'Documentation' },
      { title: 'TechWorld with Nana', desc: 'YouTube channel with in-depth DevOps tutorials on Docker, Kubernetes, CI/CD, and Terraform. Some of the best free content available.', url: 'https://www.youtube.com/@TechWorldwithNana', tag: 'YouTube' },
      { title: 'A Cloud Guru', desc: 'Structured cloud learning paths for AWS, Azure, and GCP. Includes hands-on labs and certification prep.', url: 'https://acloudguru.com', tag: 'Platform' },
      { title: 'GitHub Actions Docs', desc: 'Official guide to setting up CI/CD pipelines with GitHub Actions. Covers workflows, runners, secrets, and deployment.', url: 'https://docs.github.com/en/actions', tag: 'Documentation' },
    ],
  },
  {
    category: 'Database',
    color: '#534AB7',
    bg: '#EEEDFE',
    icon: '⊞',
    items: [
      { title: 'PostgreSQL Docs', desc: 'The official PostgreSQL documentation. Comprehensive reference for SQL syntax, data types, indexing, and performance tuning.', url: 'https://www.postgresql.org/docs', tag: 'Documentation' },
      { title: 'MongoDB University', desc: 'Free official courses from MongoDB covering CRUD, aggregation, data modeling, and performance. Includes certifications.', url: 'https://learn.mongodb.com', tag: 'Course' },
      { title: 'SQLZoo', desc: 'Interactive SQL exercises in the browser. Great for practicing queries on real datasets without any setup required.', url: 'https://sqlzoo.net', tag: 'Interactive' },
      { title: 'Prisma Docs', desc: 'Modern ORM for Node.js and TypeScript. Excellent documentation covering schema design, migrations, and querying patterns.', url: 'https://www.prisma.io/docs', tag: 'Documentation' },
      { title: 'CMU Database Course', desc: 'Carnegie Mellon\'s graduate database systems course, fully available on YouTube. Deep dive into internals, storage engines, and query optimization.', url: 'https://www.youtube.com/@CMUDatabaseGroup', tag: 'YouTube' },
      { title: 'Redis Docs', desc: 'Official Redis documentation. Covers data structures, caching patterns, pub/sub, and use cases like session storage and rate limiting.', url: 'https://redis.io/docs', tag: 'Documentation' },
    ],
  },
];

const TAG_COLORS = {
  Documentation: { bg: '#E1F5EE', color: '#0F6E56' },
  Tutorial: { bg: '#FEF3C7', color: '#B45309' },
  Course: { bg: '#E6F1FB', color: '#185FA5' },
  Curriculum: { bg: '#EEEDFE', color: '#534AB7' },
  YouTube: { bg: '#FEE2E2', color: '#DC2626' },
  Project: { bg: '#FEF3C7', color: '#B45309' },
  Platform: { bg: '#E6F1FB', color: '#185FA5' },
  Interactive: { bg: '#EEEDFE', color: '#534AB7' },
};

export default function Resources() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = RESOURCES.map(group => ({
    ...group,
    items: group.items.filter(item =>
      (activeCategory === 'All' || group.category === activeCategory) &&
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase()) ||
        item.tag.toLowerCase().includes(search.toLowerCase()))
    ),
  })).filter(group => group.items.length > 0);

  const totalResults = filtered.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div style={{ fontFamily: SYS, background: '#fafaf9', minHeight: '100vh' }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .resource-card { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; }
        .resource-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        .back-link:hover { color: rgba(255,255,255,0.8) !important; }
        .filter-btn { transition: all 0.15s ease; cursor: pointer; border: none; font-family: inherit; }
        .search-input:focus { outline: none; border-color: #0F6E56 !important; box-shadow: 0 0 0 3px rgba(15,110,86,0.1); }
        .resource-link:hover { color: #0F6E56 !important; }
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

          <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Resources</p>
          <h1 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '16px' }}>
            The best learning<br /><span style={{ color: '#5DCAA5' }}>materials on the web.</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
            Hand-picked documentation, courses, tutorials, and YouTube channels — organized by category so you always know where to look.
          </p>

          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: '520px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className="search-input"
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '14px 16px 14px 44px',
                background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.15)',
                borderRadius: '12px', fontSize: '15px', color: 'white',
                fontFamily: SYS, boxSizing: 'border-box',
                transition: 'all 0.2s ease',
              }}
            />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#0F6E56', padding: '9px 0', overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 28s linear infinite' }}>
            {[...Array(2)].map((_, rep) =>
              ['MDN Docs', 'JavaScript.info', 'AWS Docs', 'Docker', 'MongoDB University', 'SQLZoo', 'CS50', 'The Odin Project', 'Fireship', 'Redis', 'Prisma', 'GitHub Actions'].map((t, i) => (
                <span key={`${rep}-${i}`} style={{ whiteSpace: 'nowrap', padding: '0 32px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', marginRight: '8px' }}>◆</span>{t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* FILTERS + CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px' }}>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {['All', 'Programming', 'Cloud', 'Database'].map(cat => (
            <button key={cat} className="filter-btn" onClick={() => setActiveCategory(cat)} style={{
              padding: '8px 18px', borderRadius: '99px', fontSize: '13px', fontWeight: '600',
              background: activeCategory === cat ? '#0F6E56' : 'white',
              color: activeCategory === cat ? 'white' : '#6b7280',
              border: activeCategory === cat ? 'none' : '0.5px solid #e5e7eb',
            }}>
              {cat}
            </button>
          ))}
          {search && (
            <span style={{ fontSize: '13px', color: '#9ca3af', alignSelf: 'center', marginLeft: '8px' }}>
              {totalResults} result{totalResults !== 1 ? 's' : ''} for "{search}"
            </span>
          )}
        </div>

        {/* Resource groups */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontSize: '15px', color: '#9ca3af' }}>No resources found. Try a different search.</p>
          </div>
        ) : (
          filtered.map((group) => (
            <div key={group.category} style={{ marginBottom: '72px' }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: 36, height: 36, background: group.bg, borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: group.color }}>
                  {group.icon}
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>{group.category}</h2>
                <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500' }}>{group.items.length} resources</span>
              </div>

              {/* Cards grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '14px' }}>
                {group.items.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="resource-card" style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '14px', padding: '22px 24px', height: '100%', boxSizing: 'border-box' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', letterSpacing: '-0.01em' }}>{item.title}</h3>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" style={{ flexShrink: 0, marginLeft: '8px', marginTop: '2px' }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </div>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65, marginBottom: '14px' }}>{item.desc}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{
                          fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px',
                          background: TAG_COLORS[item.tag]?.bg || '#f3f4f6',
                          color: TAG_COLORS[item.tag]?.color || '#6b7280',
                        }}>
                          {item.tag}
                        </span>
                        <span style={{ fontSize: '12px', color: group.color, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          Visit <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA */}
      <section style={{ background: '#0a0f0d', padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
            Ready to put it all<br /><span style={{ color: '#5DCAA5' }}>into practice?</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#6b7280', marginBottom: '32px', lineHeight: 1.7 }}>
            Use these resources alongside Learnorama courses to build real skills fast.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/courses/programming" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', fontWeight: '600', fontSize: '14px', padding: '14px 28px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Browse courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)', color: 'white', fontWeight: '500', fontSize: '14px', padding: '14px 28px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)' }}>
              Get started free
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