import { useState } from "react";

function FavColor() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={() => setColor("Green")}>Change Color</button>
    </div>
  );
}

export default FavColor;
