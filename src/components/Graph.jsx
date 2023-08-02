import React, { useState } from "react";
import useFetchTasks from "../hooks/useFetchTasks";

function Graph({ valueFromUpperCard }) {
  // initize x
  let x = 0;

  // fetchTasks
  const { tasks, error } = useFetchTasks();

  // filter for project_name click, and sort by start date
  const sortedTasks = tasks
    .filter((task) => valueFromUpperCard === task.project_name)
    .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

  //hover on circle logic
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleCircleHover = (circleIndex) => {
    setHoveredCircle(circleIndex);
  };

  const handleCircleLeave = () => {
    setHoveredCircle(null);
  };

  return (
    <>
      <div className="graph">
        <div className="card all-graph-cards">
          <div className="card-header">Graph</div>
          <div className="card-body graph-card-body" aria-label="graphs of timeline metrics">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 80 7"
                className="line-graph"
                aria-label="line graph for timeline"
              >
                {sortedTasks.map((task, index) => {
                  if (valueFromUpperCard === task.project_name) {
                    const formattedStart = task.start_date.slice(5, 11);
                    const formattedEnd = task.end_date.slice(5, 11);
                    const dy = `${x}em`;
                    x += 5;
                    return (
                      <>
                        <g
                          key={index}
                          onMouseEnter={() => handleCircleHover(index)}
                          onMouseLeave={handleCircleLeave}
                        >
                          <circle cx={x} cy={2} r={1} fill={task.completed_status==="Closed"? "#0091D5": "#EA6A47"} />
                          {hoveredCircle === index && (
                            <text x={x - 1} y={3} fontSize={0.7}>
                              <tspan x={x - 2} dy={1}>
                                Task: {task.task}
                              </tspan>
                              <tspan x={x - 2} dy={1}>
                                Start Date: {formattedStart}
                              </tspan>
                              <tspan x={x - 2} dy={1}>
                                End Date: {formattedEnd}
                              </tspan>
                            </text>
                          )}
                        </g>
                      </>
                    );
                  }
                  return null;
                })}
              </svg>
            </div>
          </div>
        </div>
    </>
  );
}

export default Graph;
