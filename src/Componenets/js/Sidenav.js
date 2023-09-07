import React from "react";
import "../css/Sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = ({ children }) => {
  return (
    <div className="navi">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li className="active">
            <ul className="list-unstyled" id="homeSubmenu">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/class">Classes</Link>
              <Link to="./Teacher">Teachers</Link>
              <Link to="/classes">Learners</Link>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Sidenav;
