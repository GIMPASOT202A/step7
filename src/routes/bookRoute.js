const express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

function router(nav){
  const books = [
    {
      title: 'Sample book title here',
      genre: 'Historical fiction',
      author: 'Kwame Oppong',
      read: false,
    },
    {
      title: 'Sample book title here',
      genre: 'Historical fiction',
      author: 'Kwame Oppong',
      read: false,
    },
    {
      title: 'Sample book title here',
      genre: 'Historical fiction',
      author: 'Kwame Oppong',
      read: false,
    },
    {
      title: 'Sample book title here',
      genre: 'Historical fiction',
      author: 'Kwame Oppong',
      read: false,
    },
  ];
  bookRouter.route('/')
    .get((req, res) => {
      const request = new sql.Request();
      request.query('select * from books')
      .then((result) => {
        debug(result);
        res.render(
          'bookListView',
          {
            nav,
            title: 'Library',
            books,
          },
        );
      });
    });
  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id],
        },
      );
    });
    return bookRouter;
}
module.exports = router;
