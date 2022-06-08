# Introduction

This is nodejs library that helps in integrating and calculating crypto pair prices
It currently supports all pair prices in these nine (9)  cryptocurrencies ( Bitcoin(BTC), Litecoin(LTC), Ethereum(ETH), Bitcoin Cash(BCH), Ethereum Classic(ETC), Zcash(ZEC), Stellar Lumen(XLM), Bitcoin Satoshi's Vision (BSV) and Chainlink (LINK))

# Installation

```npm install mmanzi-cryptopairprice```

# Usage 

```js

node


Open your "package.json" file and add the type property with value of module

 👇

"type":"module"


Example of package.json including type property with value module 

 package.json

 {
  "name": "mmanzi-cryptopairprice",
  "version": "1.0.1",
  "description": "Calculate crypto pair prices with only one call",
  "main": "index.js",
👉"type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [
    "Crypto pair",
    "Cryptocurrency",
    "Crypto",
    "pair price",
    "mmanzi-cryptopairprice",
    "mmanzi pair price",
    "crypto pair prices"
  ],
  "author": "Mmanzi",
  "repository": {
    "type": "git",
    "url": "https://github.com/MManzicoder/cryptopairprices.git"
  },
  "license": "ISC",
  "dependencies": {
    "axios": "^0.27.2"
  }
}

 import  convert  from "mmanzi-cryptopairprice";
 
 Add parameters to the function to convert from specified cryptocurrency to another


 Example

 const data1 = await convert("BTC", "LTC", 2000);//parameters 👉 (from, to, amount)
   
 /*
 returned data
   👇
{
  amountToConvert: 20,
  from: 'BTC',
  to: 'LTC',
👉convertedAmount: 9718.519251139376
}

*/
 const data2 = await convert("ETH", "BTC",1000);//parameters 👉 (from, to, amount)

/*
returned data
   👇
 {
  amountToConvert: 1000,
  from: 'ETH',
  to: 'BTC',
👉convertedAmount: 59.16970031548021
}

*/
const data3 = await convert("LINK", "ZEC",1);//parameters 👉 (from, to, amount)

/*
returned data
   👇
 {
  amountToConvert: 1,
  from: 'LINK',
  to: 'ZEC',
👉convertedAmount: 0.0921754263643847
}

*/

 ⚠️ Note: "convertedAmount" property in the returned object is the expected converted amount.


 ```
# How I've built it.

I've used an external crypto api that generates cryptocurrencies and its corresponding amount in USD and then use the given data to convert to a specified cryptocurrency.

I've used this api to get the real time cryptocurrency data 👉 https://api.coinbase.com

# Contribute

If you would like to contribute, you're welcome. Clone repository and open pull request

# Any Question

Don't hesitate to contact me if you got any question or you want to say hi. 
👉 Email: mmanzicder@gmail.com