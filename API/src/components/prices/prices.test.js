import {checkPairs} from "./pricesService.js";

const PAIR_URL = 'https://apimocha.com/marketstatus/prices/'
const PAIR = 'tBTCUSD'
const DATA_PAIR = [
    42116,
    10.74877255,
    42117,
    18.85021031,
    -685,
    -0.016,
    42117,
    3574.58526656,
    44023,
    41824
]
describe("GET /prices", () => {
    it("should ", async () => {
        checkPairs(PAIR_URL, PAIR).then(res => {
            expect(res).toStrictEqual(DATA_PAIR)
        })
    });
});

