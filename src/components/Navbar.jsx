import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">Campus Vision</div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
        {user?.isAdmin && <Link to="/add-college">Add College</Link>}
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
