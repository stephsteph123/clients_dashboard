// Projects.jsx
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../hooks/myContext";
import useFetchProjects from "../hooks/useFetchProjects";

function Projects() {
  const { projects, error } = useFetchProjects();

  return (
    <div className="col col-4 col-project">
      {error ? (
        <div>Error: {error}</div>
      ) : projects === null ? (
        <div>Loading projects...</div>
      ) : (
        <div className="card all-project-cards">
          <div className="card-header">Projects</div>
          <div className="card-body projects-card-body">
            {projects.map((project, index) => (
              <div className="stat-line" key={index}>
                <div className="stat-name" onClick={handleClick}>
                  {project.project_name}
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Default striped example"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped"
                    style={{ width: project.project_completed + "%" }}
                  >
                    {project.project_completed}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
