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
  let openPercentage = Math.round((openVal / total) * 100);
  let strokeDash = `${openPercentage} 180`;

  return (
    <div className="col col-4 col-progress">
      <div className="card all-progress-cards">
        <div className="card-header tasks-header">Progress</div>
        <div className="card-body progress-card-body"></div>
        {closedPercentage || openPercentage ? (
          <>
            <div
              class="donut-graph-section"
              aria-label="graphs of hiring metrics"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 42 42"
                class="donut"
                aria-label="donut graph for number of applicants"
              >
                <circle
                  class="donut-hole"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="#fff"
                ></circle>
                <circle
                  class="donut-ring"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#d2d3d4"
                  stroke-width="4"
                ></circle>
                <circle
                  class="donut-segment"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#8DC7CD"
                  stroke-width="4"
                  stroke-dasharray={strokeDash}
                ></circle>
                <g class="donut-graph-text-one">
                  <text x="50%" y="50%" class="chart-label1">
                    Closed: {closedVal}
                  </text>
                  <text x="50%" y="50%" class="chart-label2">
                    Open: {openVal}
                  </text>
                </g>
              </svg>
            </div>
          </>
        ) : (
        <div></div>
        )}
      </div>
    </div>
  );
}

export default Progress;
