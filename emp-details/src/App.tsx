import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./Component/Login";
import DashBoard from "./Component/DashBoard";
import Alert from "./Component/Alert";
import Client from "./Component/Client";
import Details from "./Component/User";
import Users from "./Component/User";
import Add from "./Component/Add";
import Navbar from "./Component/Navbar";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          {/* <Route path="alert" element={<Alert />} /> */}
          <Route path="emp" element={<Client />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="user" element={<Users />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
