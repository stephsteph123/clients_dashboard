let api = "http://127.0.0.1:8090/api/collections/contacts/records/";
let card_body = document.getElementById("id_contact_card_body");
profiles = [];

fetch(api)
.then(response => response.json())
.then(data => {
    profiles = data.items;
    getContacts(profiles);
});

(function GetContacts(){
    console.log("I was called");
  })();

function getContacts(contacts) {
  contacts.forEach(function (contact) {
      card_body.innerHTML += `<div class="card contact-card">
      <img src="${contact.url}" class="card-img-top" alt="..." />
      <div class="card-body contact-card-body">
          <p class="card-text">${contact.name}</p>
      </div>
      </div>`;
  });
};