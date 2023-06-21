import React, { useState, useEffect } from 'react';

function Tasks(){
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const taskApi = "http://127.0.0.1:8090/api/collections/tasks/records/";

    fetch(taskApi)
    .then(response => {
      if(!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      setTasks(data.items)
    })
    .catch(error => {
      setError(error.message);
    });
  }, []);

  return (
    <div>
    {error ? (
      <div>Error: {error}</div>
    ) : (
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <div>{task.task}</div>
            <div>{task.project_name}</div>
            <div>{task.start_date}</div>
            <div>{task.end_date}</div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Tasks;