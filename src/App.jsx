// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import AddCollege from './pages/AddCollege';

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Login />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='/home' element={<Home />} />
//       <Route path='/profile' element={<Profile />} />
//       <Route path='/settings' element={<Settings />} />
//       <Route path='/add-college' element={<AddCollege />} />
//     </Routes>
//   );
// }

// export default App;


// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import AddCollege from './pages/AddCollege';
// import CollegeDetail from './pages/CollegeDetail'; // ✅ Import this

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Login />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='/home' element={<Home />} />
//       <Route path='/profile' element={<Profile />} />
//       <Route path='/settings' element={<Settings />} />
//       <Route path='/add-college' element={<AddCollege />} />
//       <Route path='/college/:id' element={<CollegeDetail />} /> {/* ✅ New Route */}
//     </Routes>
//   );
// }

// export default App;


// 33333333333333333333333333333333333333333333333333333333333333


import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AddCollege from './pages/AddCollege';
import CollegeDetail from './pages/CollegeDetail';
import Layout from './components/Layout'; // ✅ Import the layout

function App() {
  return (
    <Routes>
      {/* Routes without Navbar */}
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Routes with Navbar */}
      <Route element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/add-college' element={<AddCollege />} />
        <Route path='/college/:id' element={<CollegeDetail />} />
      </Route>
    </Routes>
  );
}

export default App;


