import "./Profile.css";

function Profile({patient}) {
  return (
    <div className="profile">
      {/* Patient Info */}
      <div className="patient-profile">
        <img src="https://i.pravatar.cc/150?img=5" alt="Jessica Taylor" />

        <h2>{patient.name}</h2>
      </div>

      {/* Details */}
      <div className="patient-details">
        <div className="detail-item">
          <h4>Date Of Birth</h4>
          <p>{patient.date_of_birth}</p>
        </div>

        <div className="detail-item">
          <h4>Gender</h4>
          <p>{patient.gender}</p>
        </div>

        <div className="detail-item">
          <h4>Contact Info</h4>
          <p>{patient.phone_number}</p>
        </div>

        <div className="detail-item">
          <h4>Emergency Contact</h4>
          <p>{patient.emergency_contact}</p>
        </div>

        <div className="detail-item">
          <h4>Insurance Provider</h4>
          <p>{patient.insurance_type}</p>
        </div>
      </div>
      <br />
      <br />

      {/* Button */}
      <button className="info-btn">Show All Information</button>
      <br />

      {/* Lab Results */}
      <div className="lab-results">
        <h3>Lab Results</h3>

        {patient.lab_results.map((lab, index) => (
          <div className="lab-item" key={index}>
            {lab}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
