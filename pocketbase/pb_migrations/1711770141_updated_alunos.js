/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dwjwxwu0qfbn8ht")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tazrzvvt",
    "name": "nome",
    "type": "text",
    "required": false,
    "presentable": true,
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
  const collection = dao.findCollectionByNameOrId("dwjwxwu0qfbn8ht")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tazrzvvt",
    "name": "nome",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
