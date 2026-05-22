import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import generateCertificate from '../../components/Certificate/Certificate';

const Lesson = () => {
  const { courseId } = useParams();
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [course, setCourse]           = useState(null);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted]     = useState(false);
  const [certId, setCertId]           = useState('');
  const [loading, setLoading]         = useState(true);
  const [certLoading, setCertLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/single/${courseId}`)
      .then(res => { setCourse(res.data); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, [courseId]);

  // Check if user already completed this course
  useEffect(() => {
    if (!token) return;
    axios.get('http://localhost:5000/api/progress/mine', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      const match = res.data.find(c => c.courseId?._id === courseId || c.courseId === courseId);
      if (match) { setCompleted(true); setCertId(match.certificateId); }
    }).catch(() => {});
  }, [courseId, token]);

  const handleComplete = async () => {
    if (!user) return navigate('/login');
    setCertLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/progress/complete',
        { courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCompleted(true);
      setCertId(res.data.certificateId);
    } catch (err) {
      console.error(err);
    }
    setCertLoading(false);
  };

  const handleDownload = () => {
    generateCertificate({
      studentName: user?.name || 'Student',
      courseTitle: course?.title || 'Course',
      completedAt: new Date(),
      certificateId: certId,
    });
  };

  if (loading) return <div style={{ padding: '80px', textAlign: 'center', color: '#9ca3af' }}>Loading…</div>;
  if (!course) return <div style={{ padding: '80px', textAlign: 'center', color: '#ef4444' }}>Course not found.</div>;

  const lessons = course.lessons || [];
  const isLast = activeLesson === lessons.length - 1;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>

      {/* SIDEBAR */}
      <aside style={{ width: '280px', flexShrink: 0, background: '#0a0f0d', borderRight: '0.5px solid #1f2937', overflowY: 'auto', padding: '24px 0' }}>
        <div style={{ padding: '0 20px 20px', borderBottom: '0.5px solid #1f2937' }}>
          <Link to="/courses/programming" style={{ fontSize: '12px', color: '#5DCAA5', textDecoration: 'none' }}>← Back to courses</Link>
          <p style={{ fontSize: '13px', fontWeight: '700', color: 'white', marginTop: '12px', lineHeight: 1.4 }}>{course.title}</p>
          <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>{lessons.length} lessons</p>
        </div>

        <div style={{ padding: '12px 0' }}>
          {lessons.map((lesson, i) => (
            <button key={i} onClick={() => setActiveLesson(i)}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 20px', background: activeLesson === i ? '#0F6E56' : 'none',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i < activeLesson ? '#5DCAA5' : activeLesson === i ? 'rgba(255,255,255,0.2)' : '#1f2937',
                fontSize: '10px', fontWeight: '700', color: i < activeLesson ? '#0a0f0d' : 'white',
              }}>
                {i < activeLesson ? '✓' : i + 1}
              </span>
              <span style={{ fontSize: '13px', color: activeLesson === i ? 'white' : '#9ca3af', lineHeight: 1.4 }}>
                {lesson.title}
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', background: '#f9fafb' }}>

        {/* Lesson header */}
        <div style={{ background: 'white', borderBottom: '0.5px solid #e5e7eb', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
              Lesson {activeLesson + 1} of {lessons.length}
            </p>
            <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em' }}>
              {lessons[activeLesson]?.title}
            </h1>
          </div>

          {/* Progress bar */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px' }}>
              {Math.round(((activeLesson) / lessons.length) * 100)}% complete
            </p>
            <div style={{ width: '160px', height: '4px', background: '#e5e7eb', borderRadius: '99px' }}>
              <div style={{ height: '100%', borderRadius: '99px', background: '#0F6E56', width: `${(activeLesson / lessons.length) * 100}%`, transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>

        {/* Lesson content */}
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 40px' }}>
          <div style={{ background: 'white', borderRadius: '16px', border: '0.5px solid #e5e7eb', padding: '40px' }}>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.85, whiteSpace: 'pre-wrap' }}>
              {lessons[activeLesson]?.content}
            </p>
          </div>

          {/* Navigation buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', alignItems: 'center' }}>
            <button onClick={() => setActiveLesson(i => Math.max(0, i - 1))}
              disabled={activeLesson === 0}
              style={{ fontSize: '13px', fontWeight: '600', color: activeLesson === 0 ? '#d1d5db' : '#374151', background: 'white', border: '0.5px solid #e5e7eb', padding: '10px 20px', borderRadius: '8px', cursor: activeLesson === 0 ? 'not-allowed' : 'pointer' }}>
              ← Previous
            </button>

            {isLast ? (
              completed ? (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: '#0F6E56', fontWeight: '600' }}>✓ Course completed</span>
                  <button onClick={handleDownload}
                    style={{ fontSize: '13px', fontWeight: '700', color: 'white', background: '#0F6E56', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer' }}>
                    Download Certificate
                  </button>
                </div>
              ) : (
                <button onClick={handleComplete} disabled={certLoading}
                  style={{ fontSize: '13px', fontWeight: '700', color: 'white', background: certLoading ? '#9ca3af' : '#0F6E56', border: 'none', padding: '12px 28px', borderRadius: '8px', cursor: certLoading ? 'not-allowed' : 'pointer' }}>
                  {certLoading ? 'Saving...' : 'Complete Course & Get Certificate'}
                </button>
              )
            ) : (
              <button onClick={() => setActiveLesson(i => i + 1)}
                style={{ fontSize: '13px', fontWeight: '700', color: 'white', background: '#0F6E56', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer' }}>
                Next Lesson →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson;