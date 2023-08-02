migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "17jilytm",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6")

  // remove
  collection.schema.removeField("17jilytm")

  return dao.saveCollection(collection)
})
