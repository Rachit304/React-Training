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

function App() {
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
    <div>
      <List />
    </div>
  );
}

export default App;
