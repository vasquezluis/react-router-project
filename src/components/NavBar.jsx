import { NavLink } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notactive")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notactive")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notactive")}
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
