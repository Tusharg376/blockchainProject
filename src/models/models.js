const mongoose = require('mongoose')

const coinSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    marketCapUsd: String,
    priceUsd: String
})

module.exports = mongoose.model('coin', coinSchema)
