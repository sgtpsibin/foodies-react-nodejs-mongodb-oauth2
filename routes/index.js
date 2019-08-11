var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  express.static(path.join(__dirname,'client','build'));
  res.sendFile(__dirname + 'index.html');
});



module.exports = router;
