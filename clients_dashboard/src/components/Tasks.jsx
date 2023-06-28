import React, { useState, useEffect } from "react";
import Projects from "./Projects";

function Tasks() {
    const [state, setState] = useState({
      tasks: [],
      error: null,
      showForm: false,
      formValues: {
        projectName: "",
        task: "",
        startDate: "",
        endDate: "",
      },
    });
  
    const { tasks, error, showForm, formValues } = state;
  
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
          setState((prevState) => ({
            ...prevState,
            tasks: data.items,
          }));
        })
        .catch((error) => {
          setState((prevState) => ({
            ...prevState,
            error: error.message,
          }));
        });
    }, []);

  function openForm() {
    setState((prevState) => ({
      ...prevState,
      showForm: true,
    }));
  }

  function closeForm() {
    setState((prevState) => ({
      ...prevState,
      showForm: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target)
    setState((prevState) => ({
      ...prevState,
      showForm: false,
      formValues: {
        projectName: "",
        task: "",
        startDate: "",
        endDate: "",
      }
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  }
  

  return (
    <div className="col col-8 col-tasks">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="card all-tasks-cards">
          <div className="card-header tasks-header">
            Tasks
            <div className="btn-group">
              <button
                className="btn btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ...
              </button>
              <ul className="dropdown-menu task-dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={openForm}>
                    Create Task
                  </a>
                </li>
                <span
                  className="close"
                  onClick={closeForm}
                >&times;</span>
              </ul>
            </div>
            <div
              id="popupForm"
              className="popup"
              style={{ display: showForm ? "block" : "none" }}
            >
              <div className="popup-content">
                <h2>Task</h2>
                <form id="taskForm" onSubmit={handleSubmit}>
                  <label htmlFor="project-name">Project Name:</label>
                  <input
                    type="text"
                    id="project-name"
                    name="projectName"
                    value={formValues.projectName}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <label htmlFor="task">Task:</label>
                  <input
                    type="text"
                    id="task"
                    name="task"
                    value={formValues.task}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <label htmlFor="start-date">Start Date:</label>
                  <input
                    type="date"
                    id="start-date"
                    name="startDate"
                    value={formValues.startDate}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <label htmlFor="end-date">End Date:</label>
                  <input
                    type="date"
                    id="end-date"
                    name="endDate"
                    value={formValues.endDate}
                    onChange={handleInputChange}
                    required
                  ></input>
                  <input type="submit" value="Submit" id="submit"></input>
                  <span className="close" onClick={closeForm}>
                  &times;
                </span>
                </form>
              </div>
            </div>
          </div>
          <div className="card-body tasks-card-body">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
            </table>
            {state.tasks.map((task, index) => (
              <div key={index}>
                <td>{task.task}</td>
                <td>{task.project_name}</td>
                <td>{task.start_date}</td>
                <td>{task.end_date}</td>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  ></input>
                </td>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  ></input>
                </td>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
