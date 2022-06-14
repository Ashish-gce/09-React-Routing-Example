import React from "react";
import { Link } from "react-router-dom";

export const Navbars = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm font-weight-bold">
        <div className="container">
          <Link to="/" className="navbar-brand">
            React Routing Hooks
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employees" className="nav-link">
                  Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stocks" className="nav-link">
                  Stock
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
