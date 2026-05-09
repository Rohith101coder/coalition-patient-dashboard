import "./Profile.css";
import { FaDownload } from "react-icons/fa";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaVenus,
  FaUserFriends,
} from "react-icons/fa";

function Profile({patient}) {
  return (
    <div className="profile">
      {/* Patient Info */}
      <div className="patient-profile">
        <img src="https://i.pravatar.cc/150?img=5" alt="Jessica Taylor" />

        <h2>{patient.name}</h2>
      </div>
      <br />

      {/* Details */}
      <div className="patient-details">
        <div className="detail-item">
          <div className="detail-icon">
            <FaCalendarAlt />
          </div>
            <div className="detail-content">

          <h4>Date Of Birth</h4>
          <p>{patient.date_of_birth}</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <FaVenus />
          </div>
            <div className="detail-content">

          <h4>Gender</h4>
          <p>{patient.gender}</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <FaPhoneAlt />
          </div>
            <div className="detail-content">

          <h4>Contact Info</h4>
          <p>{patient.phone_number}</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <FaUserFriends />
          </div>
            <div className="detail-content">

          <h4>Emergency Contact</h4>
          <p>{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <FaShieldAlt />
          </div>
            <div className="detail-content">

          <h4>Insurance Provider</h4>
          <p>{patient.insurance_type}</p>
          </div>
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
            <span> {lab}</span>
            <FaDownload />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
