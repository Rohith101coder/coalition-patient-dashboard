import "./Navbar.css";
import { FaHeartbeat } from "react-icons/fa";
import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaCreditCard,
  FaCog,
  FaUsers
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Tech Care Logo" />
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li>
          <FaHome />
          <span>Overview</span>
        </li>

        <li className="active">
          <FaUsers />
          <span>Patients</span>
        </li>

        <li>
          <FaCalendarAlt />
          <span>Schedule</span>
        </li>

        <li>
          <FaComments />
          <span>Message</span>
        </li>

        <li>
          <FaCreditCard />
          <span>Transactions</span>
        </li>
      </ul>

      {/* Profile */}
      <div className="doctor-profile">
        <img src="https://i.pravatar.cc/40" alt="doctor" />

        <div>
          <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>

        <FaCog className="settings-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
