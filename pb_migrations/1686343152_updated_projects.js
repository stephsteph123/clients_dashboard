migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iqutjmvlu3pv9bl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zviilyy1",
    "name": "project_name",
    "type": "json",
    "required": false,
    "unique": true,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iqutjmvlu3pv9bl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zviilyy1",
    "name": "project_name",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
