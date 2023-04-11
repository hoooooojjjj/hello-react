import React from "react";
import World from "./world";

function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="World" />!
      </h1>

      <img src="cat.jpg" alt="cat" />
    </>
  );
}

export default Hello;