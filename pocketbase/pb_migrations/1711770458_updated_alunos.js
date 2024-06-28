/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dwjwxwu0qfbn8ht")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3rbkx2jm",
    "name": "cpf",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}\\-?[0-9]{2}"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dwjwxwu0qfbn8ht")

  // remove
  collection.schema.removeField("3rbkx2jm")

  return dao.saveCollection(collection)
})
