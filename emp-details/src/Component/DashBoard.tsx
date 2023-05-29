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
        <h1 className="display-4">Welcome {localStorage.getItem("uname")}</h1>
      </>
    );
  }
};

export default DashBoard;
