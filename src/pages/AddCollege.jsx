// import { useState } from 'react';
// // import Navbar from '../components/Navbar';
// import './AddCollege.css';

// function AddCollege() {
//   const [colleges, setColleges] = useState([
//     { name: '', courses: '', fees: '', location: '', image: '' },
//   ]);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updated = [...colleges];
//     updated[index][name] = value;
//     setColleges(updated);
//   };

//   const addCollegeField = () => {
//     setColleges([...colleges, { name: '', courses: '', fees: '', location: '', image: '' }]);
//   };

//   const handleSubmit = async () => {
//     for (const college of colleges) {
//       await fetch('http://localhost:5000/add-college', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(college),
//       });
//     }
//     alert('Colleges added successfully!');
//     setColleges([{ name: '', courses: '', fees: '', location: '', image: '' }]);
//   };

//   return (
//     <>
//       <div className="add-college-container">
//         <h2>Add College Details</h2>
//         {colleges.map((college, idx) => (
//           <div className="college-form" key={idx}>
//             <input
//               name="name"
//               placeholder="College Name"
//               value={college.name}
//               onChange={(e) => handleChange(idx, e)}
//             />
//             <input
//               name="courses"
//               placeholder="Courses (comma-separated)"
//               value={college.courses}
//               onChange={(e) => handleChange(idx, e)}
//             />
//             <input
//               name="fees"
//               placeholder="Fees"
//               type="number"
//               value={college.fees}
//               onChange={(e) => handleChange(idx, e)}
//             />
//             <input
//               name="location"
//               placeholder="Location"
//               value={college.location}
//               onChange={(e) => handleChange(idx, e)}
//             />
//             <input
//               name="image"
//               placeholder="Image URL"
//               value={college.image}
//               onChange={(e) => handleChange(idx, e)}
//             />
//           </div>
//         ))}
//         <div className="buttons">
//           <button onClick={addCollegeField}>+ Add Another College</button>
//           <button onClick={handleSubmit} className="submit">Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddCollege;




// import { useState } from 'react';
// import './AddCollege.css';

// function AddCollege() {
//   const [colleges, setColleges] = useState([
//     { name: '', courses: '', fees: '', location: '', image: '' },
//   ]);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updated = [...colleges];
//     updated[index][name] = value;
//     setColleges(updated);
//   };

//   const addCollegeField = () => {
//     setColleges([...colleges, { name: '', courses: '', fees: '', location: '', image: '' }]);
//   };

//   const handleSubmit = async () => {
//     try {
//       // const res = await fetch('http://localhost:5000/add-college', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(colleges),
//       // });
//       const res = await fetch('http://localhost:5000/api/colleges', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(colleges),
//       });
      

//       if (res.ok) {
//         alert('Colleges added successfully!');
//         setColleges([{ name: '', courses: '', fees: '', location: '', image: '' }]);
//       } else {
//         alert('Failed to add colleges.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Error connecting to backend.');
//     }
//   };

//   return (
//     <div className="add-college-container">
//       <h2>Add College Details</h2>
//       {colleges.map((college, idx) => (
//         <div className="college-form" key={idx}>
//           <input name="name" placeholder="College Name" value={college.name} onChange={(e) => handleChange(idx, e)} />
//           <input name="courses" placeholder="Courses (comma-separated)" value={college.courses} onChange={(e) => handleChange(idx, e)} />
//           <input name="fees" placeholder="Fees" type="number" value={college.fees} onChange={(e) => handleChange(idx, e)} />
//           <input name="location" placeholder="Location" value={college.location} onChange={(e) => handleChange(idx, e)} />
//           <input name="image" placeholder="Image URL" value={college.image} onChange={(e) => handleChange(idx, e)} />
//         </div>
//       ))}
//       <div className="buttons">
//         <button onClick={addCollegeField}>+ Add Another College</button>
//         <button onClick={handleSubmit} className="submit">Submit</button>
//       </div>
//     </div>
//   );
// }

// export default AddCollege;







import { useState } from 'react';
import './AddCollege.css';

function AddCollege() {
  const [colleges, setColleges] = useState([
    { name: '', courses: '', fees: '', location: '', image: '' },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...colleges];
    updated[index][name] = value;
    setColleges(updated);
  };

  const addCollegeField = () => {
    setColleges([
      ...colleges,
      { name: '', courses: '', fees: '', location: '', image: '' },
    ]);
  };

  const handleSubmit = async () => {
    try {
      for (const college of colleges) {
        const formattedCollege = {
          ...college,
          courses: college.courses.split(',').map((c) => c.trim()),
        };

        const res = await fetch('http://localhost:5000/api/colleges', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedCollege),
        });

        if (!res.ok) throw new Error('Failed to add a college');
      }

      alert('Colleges added successfully!');
      setColleges([
        { name: '', courses: '', fees: '', location: '', image: '' },
      ]);
    } catch (err) {
      console.error(err);
      alert('Error adding colleges.');
    }
  };

  return (
    <div className="add-college-container">
      <h2>Add College Details</h2>
      {colleges.map((college, idx) => (
        <div className="college-form" key={idx}>
          <input
            name="name"
            placeholder="College Name"
            value={college.name}
            onChange={(e) => handleChange(idx, e)}
          />
          <input
            name="courses"
            placeholder="Courses (comma-separated)"
            value={college.courses}
            onChange={(e) => handleChange(idx, e)}
          />
          <input
            name="fees"
            placeholder="Fees"
            type="number"
            value={college.fees}
            onChange={(e) => handleChange(idx, e)}
          />
          <input
            name="location"
            placeholder="Location"
            value={college.location}
            onChange={(e) => handleChange(idx, e)}
          />
          <input
            name="image"
            placeholder="Image URL"
            value={college.image}
            onChange={(e) => handleChange(idx, e)}
          />
        </div>
      ))}
      <div className="buttons">
        <button onClick={addCollegeField}>+ Add Another College</button>
        <button onClick={handleSubmit} className="submit">
           Submit
        </button>
      </div>
    </div>
  );
}

export default AddCollege;



