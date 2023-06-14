// contacts
let api = "http://127.0.0.1:8090/api/collections/contacts/records/";
let card_body = document.getElementById("id_contact_card_body");
profiles = [];

fetch(api)
.then(response => response.json())
.then(data => {
    profiles = data.items;
    getContacts(profiles);
});

function getContacts(contacts) {
    contacts.forEach(function (contact) {
        card_body.innerHTML += `<div class="card contact-card">
        <img src="${contact.url}" class="card-img-top" alt="..." />
        <div class="card-body contact-card-body">
            <p class="card-text">${contact.name}</p>
        </div>
        </div>`;
    });
}

// function deleteMe(event) {
//     let name = event.currentTarget.parentElement.children[2].innerHTML;
//     profiles = profiles.filter((profile) => !(profile.name === name));
//     card_body.innerHTML = "";
//     getContacts(profiles);
// }
// <button onclick="deleteMe(event)">Remove</button>

// projects
let projectsApi = "http://127.0.0.1:8090/api/collections/projects/records/";
let project_card_body = document.getElementById("id_project_card_body");;
projects = [];


fetch(projectsApi)
.then(response => response.json())
.then(data => {
    projects = data.items;
    getProjects(projects);
});

function getProjects(projects){
    projects.forEach(function (project) {
        project_card_body.innerHTML += `<div class="stat-line">
        <span class="stat-name" onclick="selectProject(event)">${project.project_name}</span>
        <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped" style="width: ${project.project_completed}%">${project.project_completed}%</div>
      </div>
        </div>`;
    });
}   

// tasks
let tasksApi = "http://127.0.0.1:8090/api/collections/tasks/records";
let tasks_card_body = document.getElementById("id_task_card_body");
let tasks_table = document.getElementById("id_task_table");
tasks = [];

fetch(tasksApi)
.then(response => response.json())
.then(data => {
    tasks = data.items;
});

function selectProject(event) {
    let projectName = event.currentTarget.parentElement.children[0].innerHTML;
    tasks_card_body.innerHTML = "";
    tasks_table.innerHTML = `
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;
  
    let tableBody = tasks_table.querySelector("tbody");
  
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].project_name === projectName) {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `
          <td>${tasks[i].task}</td>
          <td>${tasks[i].completed_status}</td>
          <td>${tasks[i].start_date}</td>
          <td>${tasks[i].end_date}</td>
        `;
        tableBody.appendChild(tableRow);
      }
    }
  }

//   Tasks Post Request

let pb_task = "http://127.0.0.1:8090/api/collections/tasks/records"

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
  
  fetch(pb_task, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

// Task Form

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    console.log("Form is Opened");
}

function closeForm(){
    document.getElementById("popupForm").style.display = "none";
    console.log("Form is closed");
}