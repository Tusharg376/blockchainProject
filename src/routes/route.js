const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/test', function(req,res){
    res.send({data:"api working"})
})

router.get('/assets', controller.getCoins)




module.exports = router