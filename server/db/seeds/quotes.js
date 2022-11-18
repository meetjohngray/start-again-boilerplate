const quotes = require('../data/quotes.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes')
    .del()
    .then(() => {
      return knex('quotes').insert(quotes)
    })
}
