import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import DashBoard from "./DashBoard";
import "../CSS/Login.css";
import Alert1 from "./Alert";
const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert1>Login not successful try again...</Alert1>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div>
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="t1"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="t2"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={doLogin}
                >
                  Login
                </button>
                <br></br>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
