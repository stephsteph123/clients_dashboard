migrate((db) => {
  const collection = new Collection({
    "id": "djumtblpf59ap9r",
    "created": "2023-06-09 03:00:37.214Z",
    "updated": "2023-06-09 03:00:37.214Z",
    "name": "contacts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zu1grj3t",
        "name": "name",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "lmugeqbs",
        "name": "url",
        "type": "json",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("djumtblpf59ap9r");

  return dao.deleteCollection(collection);
})
