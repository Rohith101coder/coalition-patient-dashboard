import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      {/* Patient Info */}
      <div className="patient-profile">
        <img src="https://i.pravatar.cc/150?img=5" alt="Jessica Taylor" />

        <h2>Jessica Taylor</h2>
      </div>

      {/* Details */}
      <div className="patient-details">
        <div className="detail-item">
          <h4>Date Of Birth</h4>
          <p>14 August 1996</p>
        </div>

        <div className="detail-item">
          <h4>Gender</h4>
          <p>Female</p>
        </div>

        <div className="detail-item">
          <h4>Contact Info</h4>
          <p>(415) 555-1234</p>
        </div>

        <div className="detail-item">
          <h4>Emergency Contact</h4>
          <p>(415) 555-5678</p>
        </div>

        <div className="detail-item">
          <h4>Insurance Provider</h4>
          <p>Sunrise Health Assurance</p>
        </div>
      </div>

      {/* Button */}
      <button className="info-btn">Show All Information</button>

      {/* Lab Results */}
      <div className="lab-results">
        <h3>Lab Results</h3>

        <div className="lab-item">Blood Tests.pdf</div>

        <div className="lab-item">CT_Scans.pdf</div>

        <div className="lab-item">Radiology_Report.pdf</div>

        <div className="lab-item">XRay_Result.pdf</div>
      </div>
    </div>
  );
}

export default Profile;
