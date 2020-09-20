import React from 'react';
import Chart from '../Chart/Chart';

import styles from './StockDetails.module.scss';

const StockDetails = ({ show, stockDetails, showStocksTableHandle }) => {
  return show ? (
    <section className={styles.Main}>
      <div className={styles.Chart}>
        <Chart stockDetails={stockDetails} />
      </div>
      <button type="button" onClick={showStocksTableHandle}>View Stocks</button>
    </section>
  ) : null;
};

export default StockDetails;
