migrate((db) => {
  const collection = new Collection({
    "id": "iqutjmvlu3pv9bl",
    "created": "2023-06-09 03:19:14.971Z",
    "updated": "2023-06-09 03:19:14.971Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zviilyy1",
        "name": "project_name",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kii8nm8a",
        "name": "project_completed",
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
  const collection = dao.findCollectionByNameOrId("iqutjmvlu3pv9bl");

  return dao.deleteCollection(collection);
})
