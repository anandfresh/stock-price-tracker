import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import Header from '../../components/Header/Header';
import StockDetails from '../../components/StockDetails/StockDetails';
import useGetLocalStorage from '../../custom-hooks/useGetLocalStorage';

import styles from './App.module.scss';

const App = () => {
  const liveStockData = useGetLocalStorage();
  const [openedStock, setOpenedStock] = useState(null);
  const [showStocksTable, setStocksTable] = useState(true);

  const showStockChartHandle = (stockName) => {
    setOpenedStock(stockName);
    setStocksTable(false);
  };

  const showStocksTableHandle = () => {
    setStocksTable(true);
  };

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Table
          show={showStocksTable}
          liveStockData={liveStockData}
          showStockChart={showStockChartHandle}
        />
        <StockDetails
          show={!showStocksTable}
          stockDetails={liveStockData[openedStock]}
          showStocksTableHandle={showStocksTableHandle}
        />
      </main>
    </div>
  );
};

export default App;
