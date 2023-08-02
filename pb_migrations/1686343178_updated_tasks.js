migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97z3wqatfmsuyz8")

  // remove
  collection.schema.removeField("5qeikcf0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0g0wepku",
    "name": "task",
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
  }))

  // remove
  collection.schema.removeField("0g0wepku")

  return dao.saveCollection(collection)
})
