import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'root') {
      localStorage.setItem('user', JSON.stringify({ username, isAdmin: true }));
      navigate('/home');
    } else {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('user', JSON.stringify({ username, isAdmin: false }));
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
        <p onClick={() => navigate('/signup')}>Don't have an account? <span className="link">Sign up</span></p>
      </form>
    </div>
  );
}

export default Login;