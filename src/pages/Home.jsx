// // 11111111111111111111111111111111111111111111111111111111111111111111111111111111
// import { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import './Home.css';

// function Home() {
//   const [query, setQuery] = useState('');
//   const [colleges, setColleges] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/colleges')
//       .then(res => res.json())
//       .then(data => setColleges(data));
//   }, []);

//   const handleSearch = () => {
//     const q = query.toLowerCase();
//     const results = colleges.filter(c =>
//       c.name.toLowerCase().includes(q) ||
//       c.location.toLowerCase().includes(q) ||
//       c.fees.toString().includes(q)
//     );
//     setFiltered(results);
//     setMessage(results.length === 0 ? 'College not found' : '');
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="home-container">
//         <div className="search-section">
//           <h1>Find Your Dream College 🎓</h1>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search by name, location or fees..."
//               value={query}
//               onChange={e => setQuery(e.target.value)}
//             />
//             <button onClick={handleSearch}>Enter</button>
//           </div>
//           {message && <p className="not-found">{message}</p>}
//         </div>

//         <div className="college-list">
//           {filtered.map(college => (
//             <div className="college-card" key={college._id}>
//               <h3>{college.name}</h3>
//               <p>{college.location}</p>
//               <p>Fees: ₹{college.fees}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;


// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

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



// 3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css"; // optional: for CSS

// function Home() {
//   const [colleges, setColleges] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/colleges")
//       .then((res) => res.json())
//       .then((data) => setColleges(data));
//   }, []);

//   const filteredColleges = colleges.filter((college) =>
//     college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     college.fees.toString().includes(searchQuery)
//   );

//   return (
//     <div className="home-container">
//       <h2 className="title">Find Your Dream College 🎓</h2>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by name, location or fees..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button>Enter</button>
//       </div>

//       <div className="college-list">
//         {filteredColleges.map((college) => (
//           <div
//             key={college._id}
//             className="college-card"
//             onClick={() => navigate(`/college/${college._id}`)}
//           >
//             <img
//               src={college.image}
//               alt={college.name}
//               className="college-image"
//             />
//             <h3>{college.name}</h3>
//             <p>{college.location}</p>
//             <p><strong>Fees:</strong> ₹{college.fees}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;











// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// function Home() {
//   const [colleges, setColleges] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/colleges")
//       .then((res) => res.json())
//       .then((data) => setColleges(data))
//       .catch((err) => console.error("Failed to fetch colleges:", err));
//   }, []);

//   const filteredColleges = colleges.filter((college) =>
//     college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     college.fees.toString().includes(searchQuery)
//   );

//   return (
//     <div className="home-container">
//       <h2 className="title">Find Your Dream College 🎓</h2>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by name, location or fees..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button>Enter</button>
//       </div>

//       <div className="college-list">
//         {filteredColleges.map((college) => (
//           <div
//             key={college._id}
//             className="college-card"
//             onClick={() => navigate(`/college/${college._id}`)}
//           >
//             <img src={college.image} alt={college.name} className="college-image" />
//             <h3>{college.name}</h3>
//             <p>{college.location}</p>
//             <p><strong>Fees:</strong> ₹{college.fees}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;







import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error("Failed to fetch colleges:", err));
  }, []);

  const filteredColleges = colleges.filter((college) => {
    const name = college.name?.toLowerCase() || "";
    const location = college.location?.toLowerCase() || "";
    const fees = college.fees?.toString() || "";
    return (
      name.includes(searchQuery.toLowerCase()) ||
      location.includes(searchQuery.toLowerCase()) ||
      fees.includes(searchQuery)
    );
  });

  return (
    <div className="home-container">
      <h2 className="title">Find Your Dream College 🎓</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, location or fees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Enter</button>
      </div>

      <div className="college-list">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <div
              key={college._id}
              className="college-card"
              onClick={() => navigate(`/college/${college._id}`)}
            >
              <img
                src={college.image || "https://via.placeholder.com/300"}
                alt={college.name}
                className="college-image"
              />
              <h3>{college.name || "Unnamed College"}</h3>
              <p>{college.location || "No Location Provided"}</p>
              <p>
                <strong>Fees:</strong> ₹{college.fees || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No colleges found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
