import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      await axios.post('http://localhost:5000/register', { username, email, password });
      alert('Signup successful! You can now log in.');
      navigate('/');  // Redirect to login page
    } catch (error) {
      alert('Error: ' + error.response.data.error || 'Signup failed.');
    }
  };

  return (
    <div className="Signup">
      <form onSubmit={handleSignup}>
        <h2>Register</h2>
        <div className="inputbox">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="inputbox">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="remember-forget">
          <label><input type="checkbox" required /> I agree to the Terms & Conditions</label>
        </div>
        <button type="submit" className="btn">Signup</button>
        <div className="register">
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
};
