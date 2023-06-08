// contacts
let contactsApi = "https://my.api.mockaroo.com/contacts.json?key=3203fe50";
let contact_card_body = document.getElementById("id_contact_card_body");
profiles = [];

fetch(contactsApi)
.then(response => response.json())
.then(data => {
    profiles = data;
    getContacts(profiles);
});

function getContacts(contacts) {
    contacts.forEach(function (contact) {
        contact_card_body.innerHTML += `<div class="avatar">
        <button onclick="deleteMe(event)">Remove</button>
        <img src="${contact.url}" alt="" />
        <span class="name">${contact.name}</span>
        </div>`;
    });
}

function deleteMe(event) {
    let name = event.currentTarget.parentElement.children[2].innerHTML;
    profiles = profiles.filter((profile) => !(profile.name === name));
    contact_card_body.innerHTML = "";
    getContacts(profiles);
}

// projects
let projectsApi = "https://my.api.mockaroo.com/projects.json?key=3203fe50";
let project_card_body = document.getElementById("id_card_body");;
projects = [];


fetch(projectsApi)
.then(response => response.json())
.then(data => {
    projects = data;
    getProjects(projects);
});

function getProjects(projects){
    projects.forEach(function (project) {
        project_card_body.innerHTML += `<div class="stat-line">
        <span class="stat-name">${project.project_name}</span>
        <span class="stat-percent">${project.completed}%</span>
        </div>`;
    });
}