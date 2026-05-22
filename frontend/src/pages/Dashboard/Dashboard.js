import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import generateCertificate from '../../components/Certificate/Certificate';

const Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = ['programming', 'cloud', 'database'];
        const courseResults = await Promise.all(
          categories.map(cat => axios.get(`http://localhost:5000/api/courses/${cat}`))
        );
        const allCourses = courseResults.flatMap(r => r.data);
        setCourses(allCourses);

        const progressRes = await axios.get('http://localhost:5000/api/progress/mine', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCompleted(progressRes.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    if (token) fetchData();
  }, [token]);

  const completedCourses = completed.map(c => {
    const full = courses.find(course => course._id === (c.courseId?._id || c.courseId));
    return full ? { ...full, completedAt: c.completedAt, certificateId: c.certificateId } : null;
  }).filter(Boolean);

  const completedIds = new Set(completedCourses.map(c => c._id));

  const categoryMeta = {
    programming: { icon: '< >', label: 'Programming' },
    cloud:       { icon: '☁',  label: 'Cloud'       },
    database:    { icon: '🗄',  label: 'Database'    },
  };

  if (loading) return (
    <div style={{ background: '#060a08', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#5DCAA5', fontSize: '15px' }}>Loading dashboard…</p>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#060a08', minHeight: '100vh' }}>

      {/* HERO — dark with grid */}
      <section style={{ position: 'relative', padding: '72px 40px 56px', overflow: 'hidden', borderBottom: '0.5px solid #1a2e25' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.07,
          backgroundImage: 'linear-gradient(rgba(93,202,165,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(93,202,165,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', color: '#5DCAA5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Dashboard
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '12px' }}>
            Welcome back,{' '}
            <span style={{ color: '#5DCAA5' }}>{user?.name?.split(' ')[0] || 'Learner'}</span>
            <span style={{ color: '#5DCAA5' }}>.</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>
            Track your progress and keep building.
          </p>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#0F6E56', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: '40px' }}>
          {['JavaScript', 'AWS', 'Docker', 'SQL', 'MongoDB', 'CI/CD', 'Python', 'Node.js', 'Git', 'REST APIs', 'Redis', 'PostgreSQL'].map(t => (
            <span key={t} style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#5DCAA5', fontSize: '8px' }}>◆</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* WHITE CONTENT AREA */}
      <div style={{ background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px' }}>

          {/* STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '56px' }}>
            {[
              { label: 'Total Courses',     value: courses.length,          color: '#0F6E56' },
              { label: 'Completed',         value: completedCourses.length, color: '#0F6E56' },
              { label: 'Certificates',      value: completedCourses.length, color: '#0F6E56' },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'white', border: '0.5px solid #e5e7eb',
                borderRadius: '14px', padding: '28px 24px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', fontWeight: '800', color: stat.color, letterSpacing: '-0.04em', marginBottom: '6px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* COMPLETED COURSES */}
          {completedCourses.length > 0 && (
            <div style={{ marginBottom: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', letterSpacing: '-0.01em' }}>Completed</h2>
                <span style={{ fontSize: '11px', fontWeight: '600', background: '#dcfce7', color: '#0F6E56', padding: '3px 10px', borderRadius: '99px' }}>
                  {completedCourses.length}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
                {completedCourses.map(course => {
                  const meta = categoryMeta[course.category] || categoryMeta.programming;
                  return (
                    <div key={course._id} style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden' }}>
                      <div style={{ background: '#0F6E56', padding: '20px 24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '6px 10px', fontSize: '12px', fontWeight: '700', color: 'white' }}>
                            {meta.icon}
                          </div>
                          <span style={{ fontSize: '11px', fontWeight: '700', background: 'rgba(0,0,0,0.2)', color: 'white', padding: '3px 10px', borderRadius: '99px' }}>
                            ✓ Done
                          </span>
                        </div>
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', letterSpacing: '-0.01em' }}>{course.title}</h3>
                      </div>
                      <div style={{ padding: '16px 24px' }}>
                        <div style={{ height: '3px', background: '#f0fdf4', borderRadius: '99px', marginBottom: '16px' }}>
                          <div style={{ height: '100%', width: '100%', background: '#0F6E56', borderRadius: '99px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: '#0F6E56', fontWeight: '600' }}>
                            {new Date(course.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <button
                            onClick={() => generateCertificate({
                              studentName: user?.name,
                              courseTitle: course.title,
                              completedAt: course.completedAt,
                              certificateId: course.certificateId,
                            })}
                            style={{ fontSize: '12px', fontWeight: '600', color: 'white', background: '#0F6E56', border: 'none', padding: '7px 14px', borderRadius: '7px', cursor: 'pointer' }}>
                            Download Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ALL COURSES */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#111827', letterSpacing: '-0.01em' }}>All Courses</h2>
              <span style={{ fontSize: '11px', fontWeight: '600', background: '#f3f4f6', color: '#6b7280', padding: '3px 10px', borderRadius: '99px' }}>
                {courses.length}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
              {courses.map(course => {
                const meta = categoryMeta[course.category] || categoryMeta.programming;
                const isDone = completedIds.has(course._id);
                return (
                  <div key={course._id} style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden' }}>
                    <div style={{ background: isDone ? '#0F6E56' : '#f0fdf4', padding: '20px 24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{ background: isDone ? 'rgba(0,0,0,0.2)' : 'white', borderRadius: '8px', padding: '6px 10px', fontSize: '12px', fontWeight: '700', color: isDone ? 'white' : '#0F6E56' }}>
                          {meta.icon}
                        </div>
                        {isDone ? (
                          <span style={{ fontSize: '11px', fontWeight: '700', background: 'rgba(0,0,0,0.2)', color: 'white', padding: '3px 10px', borderRadius: '99px' }}>✓ Done</span>
                        ) : course.isPremium ? (
                          <span style={{ fontSize: '11px', fontWeight: '700', background: '#fef3c7', color: '#92400e', padding: '3px 10px', borderRadius: '99px' }}>⭐ Premium</span>
                        ) : (
                          <span style={{ fontSize: '11px', fontWeight: '700', background: 'white', color: '#0F6E56', padding: '3px 10px', borderRadius: '99px' }}>Free</span>
                        )}
                      </div>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: isDone ? 'white' : '#111827', letterSpacing: '-0.01em' }}>{course.title}</h3>
                    </div>
                    <div style={{ padding: '16px 24px' }}>
                      <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '14px' }}>
                        {course.lessons?.length || 0} lessons · {meta.label}
                      </p>
                      <Link to={`/lesson/${course._id}`} style={{
                        display: 'block', textAlign: 'center', fontSize: '13px', fontWeight: '600',
                        color: isDone ? '#6b7280' : 'white',
                        background: isDone ? '#f3f4f6' : '#0F6E56',
                        padding: '9px', borderRadius: '8px', textDecoration: 'none',
                      }}>
                        {isDone ? 'Review course' : 'Start course →'}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BROWSE CTA */}
          <div style={{ background: 'white', border: '0.5px solid #e5e7eb', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '8px', letterSpacing: '-0.02em' }}>Keep Learning</h3>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>Explore more courses across all categories.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['programming', 'cloud', 'database'].map(cat => (
                <Link key={cat} to={`/courses/${cat}`} style={{
                  fontSize: '13px', fontWeight: '600', color: 'white',
                  background: '#0F6E56', padding: '10px 24px',
                  borderRadius: '8px', textDecoration: 'none', textTransform: 'capitalize',
                }}>
                  {categoryMeta[cat].icon} {categoryMeta[cat].label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '0.5px solid #1a2e25', padding: '32px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '15px', fontWeight: '500', color: 'rgba(255,255,255,0.5)' }}>learn</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#5DCAA5' }}>orama</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>.</span>
          </div>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>© 2024 Learnorama. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;