exports.up = function (knex) {
  return knex.schema.createTable('clientData', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('areaOfLaw')
    table.string('parties')
    table.string('details')
    table.string('outcome')
    table.string('contractQ')
    table.string('file')
    table.string('anythingElse')
  })
}

exports.down = function (knex) {
  //return knex.schema.dropTable('clientData')
}
