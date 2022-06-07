import { getCurrencyInUSD, prices } from "./basePrices.js";

export const convert = async (from, to, amount)=>{
   let found = checkSupportance(from, to);    
   if(!found) return "pair prices entered are not currently supported";
   const fromData = await getCurrencyInUSD(from);
   const toData = await getCurrencyInUSD(to);
   const oneUsdForFrom = getValueOfOneUSD(fromData.amount, 1);
   const oneUsdForTo = getValueOfOneUSD(toData.amount, 1);
   const desiredValue = (oneUsdForTo/oneUsdForFrom)*amount;
   
   return {amount,from, to, expected: desiredValue+` ${to}`};
}
const checkSupportance = (from, to)=>{
  let fromFound = false;
   let toFound = false;
   prices.map((p)=>{
       if(p == from){
           fromFound = true;
       }else if (p == to){
           toFound= true;
       }
   })
   if(toFound && fromFound) return true;
   return false;
}

const getValueOfOneUSD = (usd, cryptoAmount)=>{
    let value = (cryptoAmount/usd).toString().substring(0,12);
    return parseFloat(value);
}
