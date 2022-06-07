import { getCurrencyInUSD } from "./utils/basePrices.js";
import { convert } from "./utils/conversion.js";

console.log(await convert("LTC", "BTC", 13));