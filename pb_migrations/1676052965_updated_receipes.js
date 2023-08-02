migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6")

  collection.name = "recipes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqlud957724mgg6")

  collection.name = "receipes"

  return dao.saveCollection(collection)
})
