import React, { useState, useEffect, useContext } from "react";
import useFetchTasks from "../hooks/useFetchTasks";
import useForm from "../hooks/useForm";

function Tasks({valueFromUpperCard, onChange }) {
  const { tasks, error } = useFetchTasks();
  const {
    openForm,
    showForm,
    formValues,
    closeForm,
    handleSubmit,
    handleInputChange,
  } = useForm();

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
                <span className="close" onClick={closeForm}>
                  &times;
                </span>
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
                  <th scope="col">Project Name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody> 
                {tasks.map((task, index) => {
                  if (valueFromUpperCard === task.project_name) {
                    return (
                      <tr key={index}>
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
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody> 
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
