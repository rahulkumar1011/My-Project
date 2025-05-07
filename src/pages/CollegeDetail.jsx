import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CollegeDetail() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, [id]);

  if (!college) return <p>Loading college details...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{college.name}</h2>
      <img src={college.image} alt={college.name} style={{ width: "300px", borderRadius: "10px" }} />
      <p><strong>Location:</strong> {college.location}</p>
      <p><strong>Fees:</strong> ₹{college.fees}</p>
      <p><strong>Description:</strong> {college.description}</p>
    </div>
  );
}

export default CollegeDetail;

