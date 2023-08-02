migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97z3wqatfmsuyz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hduzvi8l",
    "name": "start_date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyqdkbzj",
    "name": "end_date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97z3wqatfmsuyz8")

  // remove
  collection.schema.removeField("hduzvi8l")

  // remove
  collection.schema.removeField("pyqdkbzj")

  // remove
  collection.schema.removeField("hssu8reo")

  return dao.saveCollection(collection)
})
