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
    console.log(data.items)
  })
  .catch(error => {
    setError(error.message)
  });
}, []);

  return (
    <div>
      <div>
        {projects.map((project, index) => (
          <div key = {index}>
            <div>{project.project_name}</div>
            <div>{project.project_completed}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;