import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  const [query, setQuery] = useState('');
  const [colleges, setColleges] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/colleges')
      .then(res => res.json())
      .then(data => setColleges(data));
  }, []);

  const handleSearch = () => {
    const q = query.toLowerCase();
    const results = colleges.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.fees.toString().includes(q)
    );
    setFiltered(results);
    setMessage(results.length === 0 ? 'College not found' : '');
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="search-section">
          <h1>Find Your Dream College 🎓</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name, location or fees..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Enter</button>
          </div>
          {message && <p className="not-found">{message}</p>}
        </div>

        <div className="college-list">
          {filtered.map(college => (
            <div className="college-card" key={college._id}>
              <h3>{college.name}</h3>
              <p>{college.location}</p>
              <p>Fees: ₹{college.fees}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;


// import React, { useEffect, useState } from 'react';
// import './Home.css';

// function Home() {
//   const [colleges, setColleges] = useState([]);
//   const [selectedCollege, setSelectedCollege] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/colleges')
//       .then(res => res.json())
//       .then(data => setColleges(data));
//   }, []);

//   const handleCardClick = (college) => {
//     setSelectedCollege(college);
//   };

//   const handleBack = () => {
//     setSelectedCollege(null);
//   };

//   return (
//     <div className="home-container">
//       <h2>Explore Colleges</h2>

//       {selectedCollege ? (
//         <div className="college-detail">
//           <button onClick={handleBack}>← Back</button>
//           <img src={selectedCollege.image} alt={selectedCollege.name} />
//           <h3>{selectedCollege.name}</h3>
//           <p><strong>Courses:</strong> {selectedCollege.courses}</p>
//           <p><strong>Fees:</strong> ₹{selectedCollege.fees}</p>
//           <p><strong>Location:</strong> {selectedCollege.location}</p>
//         </div>
//       ) : (
//         <div className="college-list">
//           {colleges.map(college => (
//             <div key={college._id} className="college-card" onClick={() => handleCardClick(college)}>
//               <img src={college.image} alt={college.name} />
//               <h3>{college.name}</h3>
//               <p><strong>Location:</strong> {college.location}</p>
//               <p><strong>Fees:</strong> ₹{college.fees}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
