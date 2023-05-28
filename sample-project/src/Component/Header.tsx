import "../CSS/Header.css";
import React, { useState } from "react";
import ListGroup from "./ListGroup";
import Message from "./Message";
import Button from "./Button";

function Header() {
  let items = ["Kolkata", "Delhi", "Mumbai", "Chennai"];
  const [activePage, setActivePage] = useState("home");

  const handleItemClick = (page: string) => {
    setActivePage(page);
  };

  let content;
  if (activePage === "home") {
    content = <ListGroup heading="Metro Cities" items={items} />;
  } else if (activePage === "about") {
    content = <Message text="Hello Rachit" />;
  } else if (activePage === "contact") {
    content = <Button name="Alert" />;
  }

  return (
    <>
      <nav className="navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => handleItemClick("home")}>
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => handleItemClick("about")}>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => handleItemClick("contact")}>
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {content}
    </>
  );
}

export default Header;
