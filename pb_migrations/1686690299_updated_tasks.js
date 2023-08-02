migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97z3wqatfmsuyz8")

  // remove
  collection.schema.removeField("hssu8reo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pldtqlmh",
    "name": "completed_status",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97z3wqatfmsuyz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hssu8reo",
    "name": "completed_status",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100
    }
  }))

  // remove
  collection.schema.removeField("pldtqlmh")

  return dao.saveCollection(collection)
})
