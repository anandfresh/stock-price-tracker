import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const Chart = ({ stockDetails }) => {
  const { previousValues } = stockDetails;

  const [xDirectionLabels, setXDirectionLabels] = useState([]);
  const [yDirectionData, setYDirectionData] = useState([]);

  useEffect(() => {
    const xTemp = [];
    const yTemp = [];

    previousValues.forEach((info) => {
      xTemp.push(moment(info.time).format('h:mm:ss a'));
      yTemp.push(info.price);
    });

    setXDirectionLabels(xTemp);
    setYDirectionData(yTemp);
  }, [previousValues]);

  const chartData = {
    labels: xDirectionLabels,
    datasets: [
      {
        label: 'Share Price',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#bb86FC',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#bb86FC',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#bb86FC',
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yDirectionData,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Chart;
