import React, { useState } from "react";
import useFetchTasks from "../hooks/useFetchTasks";

function Graph({ valueFromUpperCard }) {
  // initize y
  let y = 1;

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
          <div className="card-body graph-card-body">
            <div
              className="line-graph-section"
              aria-label="graphs of timeline metrics"
            >
              <svg
                width="90%"
                height="100%"
                viewBox="0 0 42 42"
                className="line-graph"
                aria-label="line graph for timeline"
              >
                {sortedTasks.map((task, index) => {
                  if (valueFromUpperCard === task.project_name) {
                    const formattedStart = task.start_date.slice(5, 11);
                    const formattedEnd = task.end_date.slice(5, 11);
                    const dy = `${y}em`;
                    y += 5;
                    return (
                      <>
                        <g
                          key={index}
                          onMouseEnter={() => handleCircleHover(index)}
                          onMouseLeave={handleCircleLeave}
                        >
                          <circle cx={y} cy={2} r={1} fill={task.completed_status==="Closed"? "#d2d3d4": "#8DC7CD"} />
                          {hoveredCircle === index && (
                            <text x={y - 1} y={3} fontSize={0.7}>
                              <tspan x={y - 2} dy={1}>
                                Task: {task.task}
                              </tspan>
                              <tspan x={y - 2} dy={1}>
                                Start Date: {formattedStart}
                              </tspan>
                              <tspan x={y - 2} dy={1}>
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
      </div>
    </>
  );
}

export default Graph;
