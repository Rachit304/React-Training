import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Prop {
  code: string;
  name: string;
  permission: string;
  type: string;
}

const Client = () => {
  const navigate = useNavigate();
  const goDetails = (code: string, name: string, per: string, type: string) => {
    navigate(`/details/${code}?name=${name}&permission=${per}&type=${type}`);
  };
  let clients = [
    {
      code: "c001",
      name: "Rachit",
      permission: "serviceAccess",
      type: "individual",
    },
    {
      code: "c002",
      name: "Rishita",
      permission: "DataAccess",
      type: "Business",
    },
    {
      code: "c003",
      name: "Smith",
      permission: "ServiceAccess",
      type: "Goverment",
    },
    {
      code: "c004",
      name: "Eesha",
      permission: "DataAccess",
      type: "Business",
    },
  ];

  return (
    <>
      <h2 className="text-center mb-4">Client Details</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Permissions</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {clients.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.permission}</td>
                <td>{item.type}</td>
                <td>
                  <button
                    onClick={() =>
                      goDetails(
                        item.code,
                        item.name,
                        item.permission,
                        item.type
                      )
                    }
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => navigate("/add/")}> Add User</button>
    </>
  );
};

export default Client;
