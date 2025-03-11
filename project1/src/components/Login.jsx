import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent page reload

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/home');  // Redirect after login
    } catch (error) {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="inputbox">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="remember-forget">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forget password?</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register">
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </div>
      </form>
    </div>
  );
};
