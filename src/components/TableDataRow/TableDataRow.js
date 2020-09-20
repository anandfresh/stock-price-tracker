import React from 'react';
import moment from 'moment';

import styles from './TableDataRow.module.scss';

const TableDataRow = (props) => {
  const {
    stockName, price, updatedTime, variation, showStockChart,
  } = props;

  const variationClass = variation > 0 ? styles.Higher : styles.Lower;

  const variationPrefix = variation > 0 ? '+' : '';

  return (
    <tr className={styles.Row} onClick={showStockChart}>
      <td className={styles.StockName}>{stockName}</td>
      <td className={variationClass}>{price.toFixed(2)}</td>
      <td className={styles.UpdateTime}>{moment(updatedTime).fromNow()}</td>
      <td className={variationClass}>{variationPrefix + variation.toFixed(2)}</td>
    </tr>
  );
};

export default TableDataRow;
