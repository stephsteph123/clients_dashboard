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
        card_body.innerHTML += `<div class="avatar">
        <button onclick="deleteMe(event)">Remove</button>
        <img src="${contact.url}" alt="" />
        <span class="name">${contact.name}</span>
        </div>`;
    });
}

function deleteMe(event) {
    let name = event.currentTarget.parentElement.children[2].innerHTML;
    profiles = profiles.filter((profile) => !(profile.name === name));
    card_body.innerHTML = "";
    getContacts(profiles);
}

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
        <span class="stat-percent">${project.project_completed}%</span>
        <div id="progress-bar-status" style="width ${project.project_completed}%">
        <div id="progress-bar" style="width: ${project.project_completed}%"></div>
      </div>
        </div>`;
    });
}   

// tasks
let tasksApi = "http://127.0.0.1:8090/api/collections/tasks/records";
let tasks_card_body = document.getElementById("id_task_card_body");
tasks = [];

fetch(tasksApi)
.then(response => response.json())
.then(data => {
    tasks = data.items;
});

function selectProject(event){
    let projectName = event.currentTarget.parentElement.children[0].innerHTML
    tasks_card_body.innerHTML = "";
    for (let i = 0; i <tasks.length; i++){
        if (tasks[i].project_name === projectName){
            tasks_card_body.innerHTML += `
            <table>
            <tr>
            <th>Project Name: ${tasks[i].project_name}</th>
            <th>Task: ${tasks[i].task}</th>
            <th>% Completed: ${tasks[i].completed_status}</th>
            <th>Start Date: ${tasks[i].start_date}</th>
            <th>End Date: ${tasks[i].end_date}</th>
            </tr>
            </table>`
        }
    }
}

fetch(tasksAp, {
    method: 'POST',
    body: new FormData(document.querySelector('form'))
    .then(response => response.text()) 
    .then(data => alert(data))
})