var express = require('express');
var router = express.Router();
const Food = require('../models/food.model');

/* GET ddata */
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
  // Food.find(req.query,null,{limit:8},await function(err,docs){
  // 	if(err) {
  // 		res.json({
  // 			"status":"Failed",
  // 			"data":[],
  // 			"Message": err
  // 		});
  // 	} else {
  // 		res.json({
  // 			"status":"Success",
  // 			"data":docs
  // 		});
  // 	}
  // });
});

router.get('/current_user',(req,res)=>{
  res.json(req.user);
});


router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = router;
