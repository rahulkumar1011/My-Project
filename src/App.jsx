import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AddCollege from './pages/AddCollege';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/add-college' element={<AddCollege />} />
    </Routes>
  );
}

export default App;