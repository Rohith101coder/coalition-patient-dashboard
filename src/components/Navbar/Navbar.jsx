import "./Navbar.css";
import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>Tech.Care</h2>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li>
          <FaHome />
          <span>Overview</span>
        </li>

        <li className="active">
          <FaHome />
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
