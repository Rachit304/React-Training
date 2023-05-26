import { MouseEvent } from "react";
function Menu() {
  const items = ["Home", "About Us", "Contact Us ", "Sign In"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <ul className="list-group">
        {items.map((x) => (
          <li className="list-group-item" key={x} onClick={handleClick}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
