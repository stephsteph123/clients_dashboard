import React, { useEffect, useState } from "react";
import LowerCard from "./LowerCard";
import UpperCard from "./UpperCard";
import Schedule from "./Schedule";
import Graph from "./Graph";

function Allcards({ newValue }) {
  const [valueFromUpperCard, setValueFromUpperCard] = useState("");
  const [valueFromLowerCard, setValueFromLowerCard] = useState("");

  function handleValueFromUpperCardChange(newValue) {
    setValueFromUpperCard(newValue);
    setValueFromLowerCard(newValue);
  }

  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="row db-wrapper">
          <div className="col col-1 one bg-danger"></div>
          <div className="col">
            <div className="row header">
              <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Bootstrap
                  </a>
                </div>
              </nav>
            </div>
            <div className="row top">
              <UpperCard onChange={handleValueFromUpperCardChange} />
            </div>
            <div className="row bottom">
              <div className="col col-12">
                <div className="row">
                  <LowerCard
                    onChange={handleValueFromUpperCardChange}
                    valueFromUpperCard={valueFromUpperCard}
                    valueFromLowerCard={valueFromLowerCard}
                  />
                </div>
              </div>
              {/* <div className="col col-4 col-schedule">
                <div className="row">
                    <Schedule />
                  </div>
                </div> */}
                <div className="col col-12">
                  <div className="row">
                    <Graph
                    valueFromUpperCard={valueFromUpperCard}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Allcards;
