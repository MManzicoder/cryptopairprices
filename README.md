# Introduction

This is nodejs library that helps in integrating and calculating crypto pair prices
It currently supports all pair prices in these nine (9)  cryptocurrencies ( Bitcoin(BTC), Litecoin(LTC), Ethereum(ETH), Bitcoin Cash(BCH), Ethereum Classic(ETC), Zcash(ZEC), Stellar Lumen(XLM), Bitcoin Satoshi's Vision (BSV) and Chainlink (LINK))

# Installation

```npm install cryptopairprices```

# Usage 

```js

node

 import { convert } from "cryptopairprices";
 //Add parameters to the function to convert from specified cryptocurrency to another
 //Example

// convert
 const data = await convert("ETH", "BTC", 2000);// (from, to, amount)
   
 //{ amount: 2000, from: 'ETH', to: 'BTC', expected: '119.09300158505243 BTC'}

 const data2 = await convert("BTC", "LTC",20);// (from, to, amount)

//{ amount: 20, from: 'BTC', to: 'LTC', expected: '9589.760724267833 LTC'}
//  expected field in the returned object is the expected converted amount.


 ```
# How I've built it.

I've used an external crypto api that generates cryptocurrencies and its corresponding amount in USD and then use the given data to convert to a specified cryptocurrency.


# Contribute

If you would like to contribute, you're welcome. Clone repository and open pull request

# Any Question

Don't hesitate to contact me if you got any question or you want to say hi. Email: mmanzicder@gmail.com