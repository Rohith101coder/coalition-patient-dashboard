import "./Sidebar.css";
import { FaEllipsisH, FaSearch } from "react-icons/fa";

function Sidebar() {
  const patients = [
    {
      name: "Emily Williams",
      gender: "Female",
      age: 18,
      image: "https://i.pravatar.cc/50?img=1",
    },
    {
      name: "Ryan Johnson",
      gender: "Male",
      age: 45,
      image: "https://i.pravatar.cc/50?img=2",
    },
    {
      name: "Brandon Mitchell",
      gender: "Male",
      age: 36,
      image: "https://i.pravatar.cc/50?img=3",
    },
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      image: "https://i.pravatar.cc/50?img=4",
    },
    {
      name: "Samantha Johnson",
      gender: "Female",
      age: 56,
      image: "https://i.pravatar.cc/50?img=5",
    },
    {
      name: "Ashley Martinez",
      gender: "Female",
      age: 54,
      image: "https://i.pravatar.cc/50?img=6",
    },
  ];

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <h2>Patients</h2>

        <FaSearch className="search-icon" />
      </div>

      {/* Patient List */}
      <div className="patients-list">
        {patients.map((patient, index) => (
          <div
            className={`patient-card ${
              patient.name === "Jessica Taylor" ? "active-patient" : ""
            }`}
            key={index}
          >
            <div className="patient-info">
              <img src={patient.image} alt={patient.name} />

              <div>
                <h4>{patient.name}</h4>

                <p>
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>

            <FaEllipsisH className="more-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
