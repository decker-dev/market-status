import Ws from 'ws'
import axios from 'axios'

export function formatContent (data) {
  return {
    bid: data[1][0],
    bidSize: data[1][1],
    ask: data[1][2],
    askSize: data[1][3],
    dailyChange: data[1][4],
    dailyChange_relative: data[1][5],
    lastPrice: data[1][6],
    volume: data[1][7],
    high: data[1][8],
    low: data[1][9]
  }
}

export const obtainTicker = (pair, url) => {
  return new Promise((resolve, reject) => {
    const w = new Ws(url)

    const msg = JSON.stringify({
      event: 'subscribe',
      channel: 'ticker',
      symbol: `t${pair}`
    })

    w.on('message', (msg) => {
      const data = JSON.parse(msg.toString())

      if (!isNaN(data[0])) {
        resolve(data)
        w.close()
      }
    })
    w.on('open', () => w.send(msg))
  })
}

export const checkPairs = (pairUrl, pair) => {
  return new Promise((resolve, reject) => {
    axios.get(pairUrl + pair)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
