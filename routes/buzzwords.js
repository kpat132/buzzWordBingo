const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//everything past buzzwords in the uri will be handled here
let words = [];


//localhost:8080/buzzwords
router.get('/', (req, res) => {
  res.json({ buzzWords: words });
}).post('/', (req, res) => {

  if (words.length < 5) {
    words.push(req.body);
    res.send({ 'success': true });
  }
  else {
    res.send({ 'success': false });
  }
}).put('/', (req, res) => {
  //findIndex, the element is an element in the words array, if it matches the requested buzzword, find its index
  const index = words.findIndex((element) => element.buzzWord === req.body.buzzWord);
  //console.log(index);
  //if the index exists 
  if (index > -1) {
    words[index].points = req.body.points;
    res.send({ 'success': true });
  }
  else {
    res.send({ 'success': false });
  }
});


//taking all the routes associated with buzzword 
module.exports = router;