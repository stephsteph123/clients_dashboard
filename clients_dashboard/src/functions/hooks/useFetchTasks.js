import { useState, useEffect } from "react";

function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const taskApi = "http://127.0.0.1:8090/api/collections/tasks/records/";

    fetch(taskApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data.items);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return { tasks, error };
}

export default useFetchTasks;