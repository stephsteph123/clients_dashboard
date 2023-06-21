import React, { useState, useEffect } from 'react';

function Contacts() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const contactApi = "http://127.0.0.1:8090/api/collections/contacts/records/";

    fetch(contactApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setProfiles(data.items);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div class="row top">
          <div class="col col-8 col-contact">
          <div class="card all-contact-cards">
          <div class="card-header">Contacts</div>
          <div class="card-body contacts-card-body">
          {profiles.map((profile, index) => (
            <div class ="contacts"key={index}>
              <div>{profile.name}</div>
              <img src={profile.url}/>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;


