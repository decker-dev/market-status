import ws from "ws";
import axios from "axios";

export function formatContent(data) {
    return {
        bid: data[1][0],
        bid_size: data[1][1],
        ask: data[1][2],
        ask_size: data[1][3],
        daily_change: data[1][4],
        daily_change_relative: data[1][5],
        last_price: data[1][6],
        volume: data[1][7],
        high: data[1][8],
        low: data[1][9],
    }
}

export const obtainTicker = (pair, url) => {
    return new Promise((resolve, reject) => {

        const w = new ws(url)

        let msg = JSON.stringify({
            event: 'subscribe',
            channel: 'ticker',
            symbol: `t${pair}`
        })

        w.on('message', (msg) => {
            const data = JSON.parse(msg.toString());

            if (!isNaN(data[0])) {
                resolve(data)
                w.close();
            }

        })
        w.on('open', () => w.send(msg))
    })
}

export const checkPairs = (pairUrl,pair) => {
    return new Promise((resolve, reject) => {

        axios.get(pairUrl + pair)
            .then(response => {
                resolve (response.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}

