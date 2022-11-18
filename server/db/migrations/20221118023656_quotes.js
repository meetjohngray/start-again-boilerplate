exports.up = function (knex) {
  return knex.schema.createTable('quotes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('author_id').references('authors.id')
    table.string('text')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('quotes')
}

