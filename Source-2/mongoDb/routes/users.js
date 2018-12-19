var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');

router.post('/new', function (req, res, next) {
  const user = new User({
    userId  : mongoose.Schema.Types.ObjectId,
    fullname: 'Mehmet A. ',
    age: {
      year: 40
    }
  });
    user.save((err, data) => {
    if (err)
      console.log(err);

    res.json(data);
  });
});

module.exports = router;
