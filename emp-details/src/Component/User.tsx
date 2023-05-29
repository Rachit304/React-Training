import React from "react";
import { useParams, useLocation } from "react-router-dom";
const Details = () => {
  let { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const permission = params.get("permission");
  const type = params.get("type");
  let clients = {
    code: id,
    name: name,
    permission: permission,
    type: type,
  };
  return (
    <div>
      <h1>Employee Details Page {id}</h1>
      <div>
        Code : {clients.code}
        <br></br>
        Name : {clients.name}
        <br></br>
        Permissions : {clients.permission}
        <br></br>
        Type : {clients.type}
        <br></br>
      </div>
    </div>
  );
};

export default Details;
