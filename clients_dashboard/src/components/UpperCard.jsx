import React, { useState } from "react";
import Contacts from './Contacts';
import Projects from './Projects';

function UpperCard({onChange}) {
  const [valueA, setValueAState] = useState("");

  function handleValueAChange(newValue) {
    setValueAState(newValue);
    onChange(newValue)
  }

  return (
    <>
    <Contacts />
    <Projects onChange={handleValueAChange}/>
    </>
  );
}

export default UpperCard;