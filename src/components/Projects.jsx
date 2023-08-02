// Projects.jsx
import React, { useState, useEffect, useContext } from "react";
import useFetchProjects from "../hooks/useFetchProjects";

function Projects({ onChange }) {
  const { projects, error } = useFetchProjects();

  function handleClick(event) {
    const value = event.target.innerHTML;
    onChange(value)
  }

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
              <div className="project-line" key={index}>
                <div className="project-name" onClick={handleClick}>
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
                    className="progress-bar"
                    style={{ width: project.project_completed + "%" , backgroundColor: '#0091D5'}}
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
