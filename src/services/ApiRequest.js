import React from "react";

const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false"
let bitcoinPrice;
fetch(apiURL)
  .then(response => response.json())
  .then(coins => {
    coins.forEach((coin) => {
      bitcoinPrice = coin.current_price;
    });
    return bitcoinPrice;
  }) 
function ApiRequest() {
  return (
    <span>{bitcoinPrice + "$"}</span>
  )
}

export default ApiRequest;