import "./Dashboard.css";

function Dashboard() {
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

          <div className="fake-chart">
            <h1>Chart Coming Soon</h1>
          </div>
        </div>

        {/* Vital Cards */}
        <div className="vital-cards">
          <div className="vital-card respiratory">
            <h4>Respiratory Rate</h4>

            <h2>20 bpm</h2>

            <p>Normal</p>
          </div>

          <div className="vital-card temperature">
            <h4>Temperature</h4>

            <h2>98.6°F</h2>

            <p>Normal</p>
          </div>

          <div className="vital-card heart">
            <h4>Heart Rate</h4>

            <h2>78 bpm</h2>

            <p>Lower than Average</p>
          </div>
        </div>
      </div>

      {/* Diagnostic List */}
      <div className="diagnostic-list">
        <h2>Diagnostic List</h2>

        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>High blood pressure</td>
              <td>Under Observation</td>
            </tr>

            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance</td>
              <td>Cured</td>
            </tr>

            <tr>
              <td>Asthma</td>
              <td>Respiratory condition</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
