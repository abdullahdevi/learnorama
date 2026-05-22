import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SYS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [coursesOpen, setCoursesOpen] = useState(false);
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav style={{ fontFamily: SYS, background: '#0a1a14', borderBottom: '0.5px solid #1a3028', position: 'sticky', top: 0, zIndex: 100 }}>
      <style>{`
        .nav-link { font-size: 13px; font-weight: 500; text-decoration: none; padding: 6px 12px; border-radius: 6px; transition: all 0.15s ease; color: rgba(255,255,255,0.6); }
        .nav-link:hover { color: rgba(255,255,255,0.95); background: rgba(255,255,255,0.06); }
        .nav-link.active { color: #5DCAA5; background: rgba(93,202,165,0.1); }
        .dropdown-item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 8px; text-decoration: none; transition: background 0.15s ease; }
        .dropdown-item:hover { background: rgba(255,255,255,0.06); }
        .logout-btn { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.5); background: none; border: 0.5px solid #1a3028; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-family: inherit; transition: all 0.15s ease; }
        .logout-btn:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.8); }
        .register-btn { font-size: 13px; font-weight: 600; color: white; text-decoration: none; padding: 6px 16px; border-radius: 6px; background: #0F6E56; transition: all 0.15s ease; }
        .register-btn:hover { background: #0a5a45; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontSize: '20px', fontWeight: '500', color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.02em' }}>learn</span>
          <span style={{ fontSize: '20px', fontWeight: '700', color: '#5DCAA5', letterSpacing: '-0.02em' }}>orama</span>
          <span style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>.</span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>

          {/* Courses dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button style={{
              fontFamily: SYS, fontSize: '13px', fontWeight: '500', background: 'none', border: 'none',
              padding: '6px 12px', borderRadius: '6px', cursor: 'pointer',
              color: isActive('/courses') ? '#5DCAA5' : 'rgba(255,255,255,0.6)',
              background: isActive('/courses') ? 'rgba(93,202,165,0.1)' : 'transparent',
              display: 'flex', alignItems: 'center', gap: '5px',
              transition: 'all 0.15s ease',
            }}>
              Courses
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: coursesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {/* Dropdown */}
            {coursesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, paddingTop: '8px',
                width: '240px', zIndex: 200,
              }}>
                <div style={{
                  background: '#0f1f18', border: '0.5px solid #1a3028',
                  borderRadius: '12px', padding: '8px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                }}>
                  {[
                    { label: 'Programming', sub: 'JS, Python, HTML', path: '/courses/programming', color: '#0F6E56', bg: '#E1F5EE', icon: '< >' },
                    { label: 'Cloud', sub: 'AWS, Docker, CI/CD', path: '/courses/cloud', color: '#185FA5', bg: '#E6F1FB', icon: '☁' },
                    { label: 'Database', sub: 'SQL, MongoDB, indexing', path: '/courses/database', color: '#534AB7', bg: '#EEEDFE', icon: '⊞' },
                  ].map(cat => (
                    <Link key={cat.path} to={cat.path} className="dropdown-item" onClick={() => setCoursesOpen(false)}>
                      <div style={{ width: 34, height: 34, background: cat.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: cat.color, flexShrink: 0 }}>
                        {cat.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: 'white', marginBottom: '1px' }}>{cat.label}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{cat.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/resources" className={`nav-link${isActive('/resources') ? ' active' : ''}`}>Resources</Link>
          <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>

          <div style={{ width: '1px', height: '20px', background: '#1a3028', margin: '0 8px' }} />

          {user ? (
            <>
              <Link to="/dashboard" className={`nav-link${isActive('/dashboard') ? ' active' : ''}`}>Dashboard</Link>
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="register-btn">Get started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;