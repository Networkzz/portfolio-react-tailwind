import React, { useState, useEffect } from "react";

const apiURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false";

const Apiv2 = () => {
  const [bitcoin, setBitcoin] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    const data = await fetch(apiURL);
    const coins = await data.json();
    setBitcoin(coins);
  };

  return (
    <>
      {bitcoin.forEach((item) => {
        <p id={item.id}>{item.current_price}</p>;
        console.log(item.current_price)
      })}
    </>
  );
};

export default Apiv2;