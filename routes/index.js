var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',(req,res)=>{
  console.log(req.body);
  res.send('form filled successfully');
});

router.post('/submit',(req,res)=>{

  res.send(req.body);

})




module.exports = router;
