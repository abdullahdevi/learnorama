import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      login(res.data.token);

      try {
        const userRes = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${res.data.token}` }
        });
        setUser(userRes.data);
      } catch (meErr) {
        console.error('Could not fetch user:', meErr);
      }

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-emerald-600 to-blue-800 text-white py-16 rounded-b-xl shadow-lg mx-auto max-w-7xl mt-4 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Create Your Account</h1>
        <p className="text-lg opacity-90">Join thousands of learners on Learnorama</p>
      </section>

      <main className="container mx-auto px-4 mt-10 max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-md">
          {error && <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                name="name" type="text" placeholder="John Doe"
                value={formData.name} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                name="email" type="email" placeholder="john@example.com"
                value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                name="password" type="password" placeholder="Min. 6 characters"
                value={formData.password} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition duration-300 disabled:opacity-50">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 hover:underline font-medium">Login here</Link>
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 rounded-t-xl mx-auto max-w-7xl px-4 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2024 Learnorama. All rights reserved.</p>
          <p className="mt-2 opacity-80">Empowering your learning journey.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;