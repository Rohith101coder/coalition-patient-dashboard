import "./Dashboard.css";
import BloodPressureChart from "../BloodPressureChart/BloodPressureChart";
import { FaLungs, FaTemperatureHigh, FaHeart } from "react-icons/fa";

function Dashboard({patient}) {
    const latestDiagnosis = patient.diagnosis_history[0];
  return (
    <div className="dashboard">
      {/* Diagnosis History */}
      <div className="diagnosis-card">
        <h2>Diagnosis History</h2>

        {/* Chart Section */}
        <div className="chart-placeholder">
          <div className="chart-header">
            <h3>Blood Pressure</h3>

            <p>Last 6 months</p>
          </div>

          <div className="bp-content">
            {/* LEFT CHART */}
            <div className="chart-section">
              <BloodPressureChart
                diagnosisHistory={patient.diagnosis_history}
              />
            </div>

            {/* RIGHT STATS */}
            <div className="bp-stats">
              <div className="bp-stat">
                <div className="dot systolic-dot"></div>

                <div>
                  <h4>Systolic</h4>

                  <h2>{latestDiagnosis.blood_pressure.systolic.value}</h2>

                  <p>{latestDiagnosis.blood_pressure.systolic.levels}</p>
                </div>
              </div>

              <hr />

              <div className="bp-stat">
                <div className="dot diastolic-dot"></div>

                <div>
                  <h4>Diastolic</h4>

                  <h2>{latestDiagnosis.blood_pressure.diastolic.value}</h2>

                  <p>{latestDiagnosis.blood_pressure.diastolic.levels}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vital Cards */}
        <div className="vital-cards">
          <div className="vital-card respiratory">
            <div className="vital-icon">
              <FaLungs />
            </div>
            <h4>Respiratory Rate</h4>

            <h2>{latestDiagnosis.respiratory_rate.value}</h2>

            <p>{latestDiagnosis.respiratory_rate.levels}</p>
          </div>

          <div className="vital-card temperature">
            <div className="vital-icon">
              <FaTemperatureHigh />
            </div>
            <h4>Temperature</h4>

            <h2>{latestDiagnosis.temperature.value}°F</h2>

            <p>{latestDiagnosis.temperature.levels}</p>
          </div>

          <div className="vital-card heart">
            <div className="vital-icon">
              <FaHeart />
            </div>
            <h4>Heart Rate</h4>

            <h2>{latestDiagnosis.heart_rate.value}bpm</h2>

            <p>{latestDiagnosis.heart_rate.levels}</p>
          </div>
        </div>
      </div>

      {/* Diagnostic List */}
      <div className="diagnostic-list">
        <h2>Diagnostic List</h2>

        <div className="diagnostic-table-wrapper">
          <table className="diagnostic-table">
            <thead>
              <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {patient.diagnostic_list.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>

                  <td>{item.description}</td>

                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
