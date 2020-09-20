import { useEffect } from 'react';
import useNewUpdate from './useNewUpdate';

const useSetLocalStorage = () => {
  const [newStockUpdate, upadatedTime] = useNewUpdate();

  useEffect(() => {
    let getStocks;

    const getStocksFromLocal = JSON.parse(localStorage.getItem('stocks'));
    if (getStocksFromLocal) {
      getStocks = getStocksFromLocal;
    } else {
      getStocks = {};
    }

    const stocks = getStocks;

    newStockUpdate.forEach((updatedStock) => {
      const [stockName, stockValue] = updatedStock;

      const stockDetails = {};

      if (stockName in stocks) {
        const lastStockData = stocks[stockName];
        const previousVariation = lastStockData.variation;

        stockDetails.variation = lastStockData.stockValue === stockValue
          ? previousVariation : stockValue - lastStockData.stockValue;

        stockDetails.stockValue = stockValue;
        stockDetails.previousValues = [{ price: stockValue, time: Date.now() },
          ...lastStockData.previousValues];
        stockDetails.lastUpdate = Date.now();
      } else {
        stockDetails.stockValue = stockValue;
        stockDetails.variation = 0;
        stockDetails.previousValues = [{ price: stockValue, time: Date.now() }];
        stockDetails.lastUpdate = Date.now();
      }

      stocks[stockName] = stockDetails;
    });


    for (const stock in stocks) {
      if (stocks[stock].previousValues.length > 20) {
        stocks[stock].previousValues.splice(20);
      }
    }

    localStorage.setItem('stocks', JSON.stringify(stocks));
  }, [newStockUpdate, upadatedTime]);

  return upadatedTime;
};

export default useSetLocalStorage;
