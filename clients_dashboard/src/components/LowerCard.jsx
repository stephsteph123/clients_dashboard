import React, { useState } from "react";
import Graph from "./Graph";
import Tasks from "./Tasks";
import Progress from "./Progress";

function LowerCard({valueFromUpperCard,valueFromLowerCard, onChange}) {
  const [valueB, setValueBState] = useState("");

  function handleValueBChange(newValue) {
    setValueBState(newValue);
    onChange(newValue)
  }

  return (
    <>
    <div className="lowerCard">
      <Tasks 
      valueFromUpperCard={valueFromUpperCard}
      onChange={handleValueBChange} />
      <Progress valueFromUpperCard={valueFromUpperCard}
      onChange={handleValueBChange}
      />
      <Graph />
      </div>
    </>
  );
}

export default LowerCard;
