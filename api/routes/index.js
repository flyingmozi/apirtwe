var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//查找收入
router.post('/sum',(req,res,next)=>{
  mongo.find('record','income',req.body,(result)=>{
    if(!result){
      res.json({
        code:0,
        tast:"查找错误",
      })
    }else{
      res.json({
        code:1,
        data:result,
      })
    }
  }) 
})
//查找支出
router.post('/pre',(req,res,next)=>{
  mongo.find('record','pay',req.body,(result)=>{
    if(!result){
      res.json({
        code:0,
        tast:"查找错误",
      })
    }else{
      res.json({
        code:1,
        data:result,
      })
    }
  }) 
})
//添加收入
router.post('/addcom',(req,res,next)=>{
  mongo.insert('record','income',req.body,(result)=>{
    if(!result){
      res.end({
        code:0,
        tast:"错误",
      })
    }else{
      res.json({
        code:1,
        tast:'成功'
      })
    }
  }) 
})
//添加支出
router.post('/addpay',(req,res,next)=>{
  mongo.find('record','pay',req.body,(result)=>{
    if(!result){
      res.json({
        code:0,
        tast:"错误",
      })
    }else{
      res.json({
        code:1,
        tast:'成功'
      })
    }
  }) 
})
module.exports = router;
