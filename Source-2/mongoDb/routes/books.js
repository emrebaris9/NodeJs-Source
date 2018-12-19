var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Models 
const Book = require('../models/Book');


router.post('/new', function (req, res, next) {
  const book = new Book({

    title: 'React',
    published: true,
    comments: [{ message: "çok iyi" }, { message: "ama karışık" }],
    meta: {
      votes: 12, favs: 356
    }
  });

  book.save((err, data) => {
    if (err)
      console.log(err);

    res.json(data);
  });
});

router.get('/search', (req, res) => {
  Book.find({ published: false }, 'title comments', (err, data) => {  // bütün kayıtları getirmek için boş bırakabiliriz.
    res.json(data);
  });
});

router.get('/searchOne', (req, res) => {
  Book.findOne({ title: "PHP" }, (err, data) => { // find one da ilk uyuştuğu kaydı alır sadece
    res.json(data);
  });
});

router.get('/searchById', (req, res) => {
  Book.findById('5c1982e2924dad3a4faa2d3e', (err, data) => { // findbyID ile bulduğu anda işlem tamamlanır
    res.json(data);
  });
});

router.put('/update', (req, res) => { // 1.parametre değiştirmek istediğin alan 2. param olmasını istedğin değer 3.param hepsini update etmek için
  Book.update({ published: false }, { published: true }, { multi: true }, (err, data) => { // falsedan true ya güncellenecek
    res.json(data);
  });
});

router.put('/updateById', (req, res) => {
  Book.findByIdAndUpdate('5c1984e1aeca263d02a7caa8', { title: "updated title" }, (err, data) => {
    res.json(data);
  });
});

router.put('/remove', (req, res) => { // ilk published true dönen veriyi siler  
  Book.findByIdAndRemove({ published: true }, (err, data) => {   // sadece remove dersek (true) hepsi silinecektir
    res.json(data);
  });
});

router.get('/sort', (req, res) => {   // sıralamaa
  Book.find({}, (err, data) => {
    res.json(data);
  }).sort({ 'meta.favs': 1 }); // -1 yazarsak da büyükten küçüğe 
});

router.get('/limitandskip', (req, res) => {
  Book.find({}, (err, data) => {
    res.json(data);
  }).skip(2).limit(1); // 2. kayıttan sonra 1 tane kayıt göster  demek  
});

router.get('/aggregate', (req, res) => {  // kümeleme 
  Book.aggregate([
    {
      $match: { title: "React" }   // eşleşme sağlanması sonucu kümele
    },

    /* {
         $group: { 
            _id: "$title",
            adet: {$sum : 1}   // şu kategoriden şu kadar var 1 er 1 er say
                  }
        } */
    {
      $project: {  // sadece başlık ve meta getirilir. 1 yerine true da yazılır.
        title: 1,
        meta: 1
      }
    } // sort, limit, skip de bu şekilde kullanılabilir
  ], (err, result) => {
    res.json(result);
  });
});

router.get('/aggregate-lookup', (req, res) => {
  Book.aggregate([
    {
      $match: {
          _id: mongoose.Types.ObjectId('5c19827e88d2d43905dc1ebe')
      }
    },
              {
                $lookup:{
                  from: 'users',          // hangi collectionda join yapacaksak
                  localField: 'userId',      // book collectiondaki hangi alanı eşleştircez 
                  foreignField: '_id',
                  as: 'user'
                }
              }            
  ], (err, result) => {
    res.json(result);
  });
});

module.exports = router;