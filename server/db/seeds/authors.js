const authors = require('../data/authors.json')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('authors')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert(authors)
    })
}
