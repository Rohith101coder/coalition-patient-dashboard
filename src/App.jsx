import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <Dashboard />

        <div className="profile-placeholder"><Profile/></div>
      </div>
    </div>
  );
}

export default App;
