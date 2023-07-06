import React, { useState } from "react";
import Graph from "./Graph";
import Tasks from "./Tasks";

function LowerCard({valueFromUpperCard,valueFromLowerCard, onChange}) {
  const [valueB, setValueBState] = useState("");

  function handleValueBChange(newValue) {
    setValueBState(newValue);
    onChange(newValue)
  }

  return (
    <>
      <Tasks 
      valueFromUpperCard={valueFromUpperCard}
      valueFromLowerCard={valueFromLowerCard}
      onChange={handleValueBChange} />
      <Graph />
    </>
  );
}

export default LowerCard;
