import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import { useEffect, useState } from "react";
import { fetchPatientData } from "./services/api";
import "./App.css";

function App() {

          const [patient, setPatient] = useState(null);

          useEffect(() => {
            async function getPatient() {
              const data = await fetchPatientData();

              setPatient(data);

              console.log(data);
            }

            getPatient();
          }, []);
          if (!patient) {
            return <h1>Loading...</h1>;
          }

  return (
    <div className="app">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <Dashboard patient = {patient}/>

        <div className="profile-placeholder">
          <Profile patient = {patient}/>
          </div>
      </div>
    </div>
  );
}

export default App;
