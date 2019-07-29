var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Food = require('../models/food.model');


//API Route :/api/[example]


/* GET Data */
router.get('/get_food_data', async function(req, res, next) {
  const paginateOptions = {
    page: req.query.page || 1,
    limit: 2
  }
  Food.paginate({},paginateOptions,await function(err,result){
    if(err) {
      res.json({
        "status":"Failed",
        "data":[],
        "Message": err
      });
    } else {
      
      res.json({
        "status":"Success",
        "data": result.docs,
        "total": result.total,
        "limit": result.limit,
        "page": result.page,
        "pages":result.pages
      });
    }
  });
});

router.get('/get_food_by_id',async (req,res)=>{
  if(!req.query.food_id) {
    res.status(400).json({
      "status": Failed,
      "data":[]
    })
  }
  _food = await Food.findById(req.query.food_id).exec();
  if(!_food) {
    res.status(404).send('Not Found');
  }
  res.send(_food);
});

router.get('/current_user',(req,res)=>{
  res.send(req.user);
});


router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = router;
