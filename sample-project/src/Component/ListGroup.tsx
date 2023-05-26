import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  heading: string;
  items: string[];
}

function List(props: Props) {
  let items = ["Kolkata", "Delhi", "Mumbai", "Banglore", "Chennai"];
  const [active, setActive] = useState(-1);
  //items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items is found in the list</p>}
      <ul className="list-group">
        {props.items.map((x, index) => (
          <li
            key={x}
            className={`list-group-item ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default List;
