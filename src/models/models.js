const mongoose = require('mongoose')

const coinSchema = new mongoose.Schema({
    symbol: String,
    name:String,
    marketCapUsd: String,
    priceUsd:String
})

module.exports = mongoose.model('coin', coinSchema)
