migrate((db) => {
  const collection = new Collection({
    "id": "97z3wqatfmsuyz8",
    "created": "2023-06-09 20:38:53.452Z",
    "updated": "2023-06-09 20:38:53.452Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ebwjfmzi",
        "name": "project_name",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "5qeikcf0",
        "name": "task",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("97z3wqatfmsuyz8");

  return dao.deleteCollection(collection);
})
