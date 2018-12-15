var express = require('express');
var router = express.Router();

// Models 
const Book = require('../models/Book');


router.post('/new', function (req, res, next) {
  const book = new Book({
    title: ' Node.js Kitabı',
    published: true,
    comments: [{ message: "Güzel bir kitaptı" }, { message: "daha iyi olabilirdi" }],
    meta: {
      votes: 12, favs: 104
    }
  });

  book.save((err, data) => {
    if (err)
      console.log(err);

    res.json(data);
  });
});

router.get('/search', (req, res) => {
  Book.find({ published: true }, (err, data) => {
    res.json(data);
  });
});

module.exports = router;