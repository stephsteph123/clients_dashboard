migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyuzopz4",
    "name": "img_1",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6")

  // remove
  collection.schema.removeField("yyuzopz4")

  return dao.saveCollection(collection)
})
