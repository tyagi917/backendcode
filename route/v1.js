const express=require('express');
const router=express.Router();
const res=require('order.js');
router.use('/restult',res);
module.exports=router;
