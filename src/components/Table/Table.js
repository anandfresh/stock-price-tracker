import React from 'react';
import TableDataRow from '../TableDataRow/TableDataRow';

import styles from './Table.module.scss';

const Table = ({ show, liveStockData, showStockChart }) => {
  return show ? (
    <table className={styles.Table}>
      <thead>
        <th>Ticker</th>
        <th>Price</th>
        <th>Last updated</th>
        <th>Variation</th>
      </thead>
      <tbody>
        {Object.keys(liveStockData).map((stockName) => {
          const { stockValue, variation, lastUpdate } = liveStockData[stockName];
          return (
            <TableDataRow
              stockName={stockName}
              price={stockValue}
              variation={variation}
              updatedTime={lastUpdate}
              showStockChart={showStockChart.bind(null, stockName)}
            />
          );
        })}
      </tbody>
    </table>
  ) : null;
};

export default Table;
