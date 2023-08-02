migrate((db) => {
  const collection = new Collection({
    "id": "rqlud957724mgg6",
    "created": "2023-02-07 20:52:34.245Z",
    "updated": "2023-02-07 20:52:34.245Z",
    "name": "receipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "owolornc",
        "name": "receipe_id",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "d3q4yjwm",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "kqyljqga",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "clyfnfr8",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "zaqc4nmz",
        "name": "quantity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
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
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6");

  return dao.deleteCollection(collection);
})
