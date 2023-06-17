export default function getContacts(contacts) {
  contacts.forEach(function (contact) {
      card_body.innerHTML += `<div class="card contact-card">
      <img src="${contact.url}" class="card-img-top" alt="..." />
      <div class="card-body contact-card-body">
          <p class="card-text">${contact.name}</p>
      </div>
      </div>`;
  });
};