const express = require('express')
const router = express.Router()
const {createshoppers}=require('../controllers/user')





router.post('/create',createshoppers)





module.exports= router