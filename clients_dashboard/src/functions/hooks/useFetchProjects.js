// useFetchProject.js
import React,{ useState, useEffect } from "react";

function useFetchProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const projectsApi = "http://127.0.0.1:8090/api/collections/projects/records/";

    fetch(projectsApi)
    .then(response => {
      if(!response.ok){
        throw new Error('failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      setProjects(data.items);
    })
      .catch(error => {
        setError(error.message);
    })
  }, []);
  return { projects, error };
}

export default useFetchProjects;
