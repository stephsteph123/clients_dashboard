import React, {useState, useEffect} from "react";

function Projects(){
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
  const projectsApi = "http://127.0.0.1:8090/api/collections/projects/records/";

  fetch(projectsApi)
  .then(response => {
    if(!response.ok){
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    setProjects(data.items);
  })
  .catch(error => {
    setError(error.message)
  });
}, []);

  return (
    <div className="col col-4 col-project">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="card all-project-cards">
        <div className="card-header">Projects</div>
        <div className="card-body projects-card-body">
        {projects.map((project, index) => (
          <div className="stat-line" key = {index}>
            <div className="stat-name" onclick="selectProject(event)">{project.project_name}</div>
            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped" style={{width: project.project_completed+"%"}}>{project.project_completed}%</div>
          </div>
          </div>
        ))}
      </div>
      </div>
      )}
    </div>
  )
}

export default Projects;