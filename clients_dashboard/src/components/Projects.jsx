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
    <div class="col col-4 col-project">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div class="card all-project-cards">
        <div class="card-header">Projects</div>
        <div class="card-body projects-card-body">
        {projects.map((project, index) => (
          <div key = {index}>
            <div>{project.project_name}</div>
            <div>{project.project_completed}</div>
          </div>
        ))}
      </div>
      </div>
      )}
    </div>
  )
}

export default Projects;