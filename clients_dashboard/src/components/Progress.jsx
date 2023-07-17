import React from "react";
import useFetchTasks from "../hooks/useFetchTasks";
import "../index.css";


function Progress({ valueFromUpperCard }) {
  const { tasks, error } = useFetchTasks();
  let closedVal = 0;
  let openVal = 0;

  tasks.map((task) => {
    if (valueFromUpperCard === task.project_name) {
      if (task.completed_status === "Open") {
        openVal = openVal + 1;
      } else {
        closedVal = closedVal + 1;
      }
    }
    return null;
  });

  let total = closedVal + openVal;
  let closedPercentage = (closedVal / total) * 100;
  let openPercentage = Math.round((openVal / total) * 51);
  let strokeDash = `${openPercentage} 200`;

  return (
    <div className="col col-4 col-progress">
      <div className="card all-progress-cards">
        <div className="card-header tasks-header">Progress</div>
        <div className="card-body progress-card-body" aria-label="graphs of progress metrics">
          {closedPercentage || openPercentage ? (
            <>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  class="donut"
                  aria-label="donut graph for progress"
                >
                  <circle
                    class="donut-hole"
                    cx="10"
                    cy="8"
                    r="9"
                    fill="#fff"
                  ></circle>
                  <circle
                    class="donut-ring"
                    cx="10"
                    cy="9"
                    r="8"
                    fill="transparent"
                    stroke="#d2d3d4"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="donut-segment"
                    cx="10"
                    cy="9"
                    r="8"
                    fill="transparent"
                    stroke="#8DC7CD"
                    stroke-width="2"
                    stroke-dasharray={strokeDash}
                  ></circle>
                  <g class="donut-graph-text-one">
                    <text x="49%" y="45%" class="chart-label1">
                      Closed: {closedVal}
                    </text>
                    <text x="49%" y="47%" class="chart-label2">
                      Open: {openVal}
                    </text>
                  </g>
                </svg>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Progress;
