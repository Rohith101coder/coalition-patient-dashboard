import "./Dashboard.css";
import BloodPressureChart from "../BloodPressureChart/BloodPressureChart";

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

          <BloodPressureChart diagnosisHistory={patient.diagnosis_history} />
        </div>

        {/* Vital Cards */}
        <div className="vital-cards">
          <div className="vital-card respiratory">
            <h4>Respiratory Rate</h4>

            <h2>{latestDiagnosis.respiratory_rate.value}</h2>

            <p>{latestDiagnosis.respiratory_rate.levels}</p>
          </div>

          <div className="vital-card temperature">
            <h4>Temperature</h4>

            <h2>{latestDiagnosis.temperature.value}°F</h2>

            <p>{latestDiagnosis.temperature.levels}</p>
          </div>

          <div className="vital-card heart">
            <h4>Heart Rate</h4>

            <h2>{latestDiagnosis.heart_rate.value}bpm</h2>

            <p>{latestDiagnosis.heart_rate.levels}</p>
          </div>
        </div>
      </div>

      {/* Diagnostic List */}
      <div className="diagnostic-list">
        <h2>Diagnostic List</h2>

    <div className="table-wrapper">
 <table>
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
