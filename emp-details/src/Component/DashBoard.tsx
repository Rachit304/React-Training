import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "../CSS/DashBoard.css";
const DashBoard = () => {
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp/");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <nav className="navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
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
        {/* <h1 className="display-4">Welcome {localStorage.getItem("uname")}</h1> */}
      </>
    );
  }
};

export default DashBoard;
