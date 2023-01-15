const coinModel = require('../models/models')
const axios = require('axios')
const getCoins = async function (req, res) {

    let coinData = await axios.get('https://api.coincap.io/v2/assets')
    let data = coinData.data.data[0]


    let { symbol, name, marketCapUsd, priceUsd, changePercent24Hr } = data

    let finalData = await coinModel.create(data)

    res.status(200).send({ status: true, data: symbol, name, marketCapUsd, priceUsd, changePercent24Hr })

}





module.exports = { getCoins }