import React, { useState, useEffect } from 'react';
import Bitcoin from './Bitcoin';
//ApiRequest to CoinGecko API to obtain Bitcoin current price.
const ApiRequest = () => {
  const [bitcoin, setBitcoin] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false"
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setBitcoin(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  //useEffect to re-render and update price of bitcoin, also persist data after reloading website.
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {bitcoin && <Bitcoin data={bitcoin} />}
      {isError && <div>Error fetching data.</div>}
    </>
  );
};
export default ApiRequest;