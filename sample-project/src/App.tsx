import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Message from "./Component/Message";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";
import ListGroup from "./Component/ListGroup";
import FavColor from "./Component/FavColor";
import "./App.css";
import List from "./Component/ListGroup";
import Button from "./Component/Button";

function App() {
  let items = ["Kolkata", "Delhi", "Mumbai", "Chennai"];
  return (
    // '<>
    //   <div col-sm-12>
    //     <Header />
    //   </div>

    //   <div col-sm-4>
    //     <Menu />
    //     {/* <FavColor /> */}
    //   </div>
    // </>

    // <>
    //   <ListGroup />
    // </>
    <>
      <div>
        <Header />
      </div>

      {/* <div>
        <Message text="Hello Rachit"></Message>
      </div>
      <div>
        <List heading="Metro Cities" items={items} />
      </div>
      <br></br>
      <div>
        <Button name="Alert" />
      </div> */}
    </>
  );
}

export default App;
