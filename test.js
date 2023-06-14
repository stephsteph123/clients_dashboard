//   Tasks Post Request

let pb = "http://127.0.0.1:8090/api/collections/tasks/records"

const recordData = {
    collectionId: "JSON",
    collectionName: "tasks",
    completed_status: "open",
    created:"",
    end_date: "",
    id:"",
    project_name:"",
    start_date: "2022-01-01 10:00:00.123Z",
    task: "JSON",
    updated: ""
  };
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recordData)
  };
  
  fetch(pb, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });