let api = "https://my.api.mockaroo.com/users?key=9ea4a810";
let card_body = document.getElementById("id_card_body");
profiles = [];

fetch(api).then(response => response.json()).then(data => {
    profiles = data;
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

getContacts();


// function getContacts() {
//     fetch(api).then(response => response.json()).then(data => {
//         data.forEach(function (contact) {
//             card_body.innerHTML += `<div class="avatar">
//             <img src="${contact.url}" alt="" />
//             <span class="name">${contact.name}</span>
//             </div>`;
//         });
//     });
// }

