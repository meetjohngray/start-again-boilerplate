const connection = require('./connection')

function getQuotes(db = connection) {
  return db('quotes')
  .select().join('authors', 'author_id', 'authors.id')
}

module.exports = {
  getQuotes,
}
