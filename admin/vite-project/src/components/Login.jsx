import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      console.log("Login response:", response.data);

      if (response.data.success) {
        const token = response.data.token;

        // ✅ Store token in state and localStorage
        setToken(token);
        localStorage.setItem('token', token);

        toast.success("Login successful!");
        navigate('/add'); // ✅ redirect to protected page (optional)
      } else {
        toast.error(response.data.message || "Login failed");
      }

    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <p className="text-gray-700 mb-1 font-medium">Email Address</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-1 font-medium">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
