import axios from "axios";

export const prices = ["BTC", "ETH","LTC","ETC","BCH","ZEC","XLM","BSV","LINK"];
export const getCurrencyInUSD = crypto =>{
    return axios.get(`https://api.coinbase.com/v2/prices/${crypto}-USD/buy/`).then(res=>res.data.data);
}