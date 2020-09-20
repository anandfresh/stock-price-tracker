import { useState, useEffect } from 'react';
import useSetLocalStorage from './useSetLocalStorage';

const useGetLocalStorage = () => {
  const [stocksData, setStocksData] = useState({});
  const updatedTime = useSetLocalStorage();

  useEffect(() => {
    const stocks = JSON.parse(localStorage.getItem('stocks'));
    setStocksData(stocks);

  }, [updatedTime]);

  return stocksData;
};

export default useGetLocalStorage;
