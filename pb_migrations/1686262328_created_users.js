migrate((db) => {
  const collection = new Collection({
    "id": "6kl1ldvnobq25vh",
    "created": "2023-06-08 22:12:08.140Z",
    "updated": "2023-06-08 22:12:08.140Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ysja5aut",
        "name": "name",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6kl1ldvnobq25vh");

  return dao.deleteCollection(collection);
})
