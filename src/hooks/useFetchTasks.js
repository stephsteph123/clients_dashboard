import { useState, useEffect } from "react";
const axios = require("axios");

function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const taskApi = "http://127.0.0.1:8090/api/collections/tasks/records/";
    localStorage.setItem("token", "hello")
    const token = localStorage.getItem("token")

    fetch(taskApi, {
      method: "GET",
      headers: { "Content-Type": "application/STEPH", "authorization": `"Bearer ${token}"` }
    })
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

  // this.axios.get("http://127.0.0.1:8090/api/collections/tasks/records/")
  // .then(response => {
  //   console.log(response)
  // })

  return { tasks, error };
}

export default useFetchTasks;
