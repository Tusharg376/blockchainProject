const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/test', function(req,res){
    res.send({data:"api working"})
})

router.get('/assets', controller.getCoins)

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://api.coincap.io/v2/assets?limit=0',
//   headers: { }
// };
// // console.log(config)
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



module.exports = router