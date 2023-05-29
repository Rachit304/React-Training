import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const location = useLocation(); // Exclude login page from displaying the navbar
  if (location.pathname === "/login/" || location.pathname === "/") {
    return null;
  }
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp");
  };

  const goHome = () => {
    navigate("/dashboard");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <nav className="navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={goHome}
                >
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={goEmployee}>
                <a className="nav-link" href="#">
                  Details
                </a>
              </li>
              <li className="nav-item" onClick={doLogout}>
                <a className="nav-link" href="#">
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};
export default Navbar;
