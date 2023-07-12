import React from "react";
import useFetchTasks from "../hooks/useFetchTasks";

function Progress({ valueFromUpperCard }) {
  const { tasks, error } = useFetchTasks();
  let closedVal = 0;
  let openVal = 0;

  tasks.map((task, index) => {
    if (valueFromUpperCard === task.project_name) {
      if (task.completed_status === "Open") {
        openVal = openVal + 1;
      } else {
        closedVal = closedVal + 1;
      }
      let total = closedVal + openVal;
      closedVal = closedVal/total;
      openVal = openVal/total;
    }
    return null;
  });

  return (
    <div className="col col-4 col-progress">
      <div className="card all-progress-cards">
        <div className="card-header tasks-header">Progress</div>
        <div className="card-body progress-card-body"></div>
        <div>{closedVal}</div>
        <div>{openVal}</div>
      </div>
    </div>
  );
}

export default Progress;
