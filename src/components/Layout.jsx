// src/components/Layout.jsx
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
