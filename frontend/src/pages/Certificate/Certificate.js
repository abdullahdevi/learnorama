import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Certificate = () => {
  const { courseId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:5000/api/courses/single/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourse(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user) fetchCourse();
  }, [user, courseId]);

  const handleDownload = () => {
    const canvas = document.getElementById('certificate-canvas');
    const link = document.createElement('a');
    link.download = `${course.title}-certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    if (!course || !user) return;
    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 900;
    canvas.height = 620;

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 900, 620);

    // Border
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 12;
    ctx.strokeRect(20, 20, 860, 580);

    ctx.strokeStyle = '#1d4ed8';
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, 836, 556);

    // Header
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 42px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Completion', 450, 120);

    // Subtitle
    ctx.fillStyle = '#6b7280';
    ctx.font = '20px serif';
    ctx.fillText('This certifies that', 450, 180);

    // Name
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 48px serif';
    ctx.fillText(user.name, 450, 250);

    // Line under name
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 265);
    ctx.lineTo(700, 265);
    ctx.stroke();

    // Course text
    ctx.fillStyle = '#6b7280';
    ctx.font = '20px serif';
    ctx.fillText('has successfully completed the course', 450, 320);

    // Course name
    ctx.fillStyle = '#1d4ed8';
    ctx.font = 'bold 32px serif';
    ctx.fillText(course.title, 450, 380);

    // Platform
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 24px serif';
    ctx.fillText('Learnorama', 450, 460);

    // Date
    ctx.fillStyle = '#9ca3af';
    ctx.font = '16px serif';
    ctx.fillText(`Issued on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 450, 510);

  }, [course, user]);

  if (!course) return <div className="p-8 text-center text-emerald-700">Loading certificate...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-emerald-600 to-blue-800 text-white py-16 rounded-b-xl shadow-lg mx-auto max-w-7xl mt-4 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">🎓 Congratulations!</h1>
        <p className="text-lg opacity-90">You have completed {course.title}</p>
      </section>

      <main className="container mx-auto px-4 mt-10 max-w-4xl text-center">
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <canvas id="certificate-canvas" className="w-full rounded-lg border border-gray-200"></canvas>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDownload}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-lg transition">
            Download Certificate
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-8 py-3 rounded-lg transition">
            Back to Dashboard
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 rounded-t-xl mx-auto max-w-7xl px-4 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2024 Learnorama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Certificate;