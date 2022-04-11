import { error, success } from '../../utils/response.js'
import { checkPairs, formatContent, obtainTicker } from './pricesService.js'

const WS_URL = 'wss://api-pub.bitfinex.com/ws/2'
const PAIR_URL = 'https://api-pub.bitfinex.com/v2/ticker/t'

export const pairPrice = (req, res) => {
  const { pair } = req.params
  return checkPairs(PAIR_URL, pair)
    .then(() => {
      obtainTicker(pair, WS_URL).then(data => {
        const { bid, bidSize, ask, askSize } = formatContent(data)
        success(req, res, `Best bid price: ${bid} amount: ${bidSize}, Best ask price: ${ask} amount: ${askSize}`)
      })
    }).catch(err => {
      error(req, res, err.message)
    })
}
