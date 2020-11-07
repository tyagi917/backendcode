const express=require('express');
const router=express.Router();
const {restult,restult1}=require('../controllers/restultcontroler.js');
router.get('/firstapi',restult);
router.get('/secondapi',restult1);