import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  function handleMeasureClick() {
    const div = elementRef.current;
    console.log("Measurements: ", elementRef.current.getBoundingClientRect());
    //console.log(div);
    console.log(elementRef.current);
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
