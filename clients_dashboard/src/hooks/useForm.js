// useTaskForm
import React, { useState } from "react";

function useForm() {
  const [state, setState] = useState({
    showForm: false,
    formValues: {
      projectName: "",
      task: "",
      startDate: "",
      endDate: "",
    }
  });

  const { showForm, formValues } = state;

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

    const { projectName, task, startDate, endDate, completed_status } = state.formValues;
    const data = {
      project_name: projectName,
      task: task,
      start_date: startDate,
      end_date: endDate,
      completed_status: "Open"
    };
  
    fetch('http://127.0.0.1:8090/api/collections/tasks/records/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('API response:', responseData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Reset the form values and update state
    setState((prevState) => ({
      ...prevState,
      showForm: false,
      formValues: {
        projectName: "",
        task: "",
        startDate: "",
        endDate: ""
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

  return {state, setState, openForm, showForm, formValues, closeForm, handleSubmit, handleInputChange};
}

export default useForm;
