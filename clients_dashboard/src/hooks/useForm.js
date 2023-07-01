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

  return {state, setState, openForm, showForm, formValues, closeForm, handleSubmit, handleInputChange};
}

export default useForm;
