import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  let abc = ["n"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List of Cities</h1>
      {abc.length === 0 && <p>No Items is found in the list</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
