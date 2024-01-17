import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';

function DepthChart({ selectedSymbol, bidData, askData }) {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("color-theme");
        if (savedTheme) {
          setTheme(savedTheme);
        }
        const intervalId = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 5000);
        return () => {
          clearInterval(intervalId);
        };
      }, []);    

  useEffect(() => {
    const chartOptions = {
        chart: {
          type: 'area',
          zoomType: 'xy',
          renderTo: 'container',
          height: 200,
          backgroundColor: theme === 'dark' ? '#111827' : 'white', 
        },

      title: {
        text: `${selectedSymbol} Market Depth`,
      },
      xAxis: {
        minPadding: 0,
        maxPadding: 0,
        plotLines: [
          {
            color: '#888',
            value: 0.1523,
            width: 1,
            label: {
              text: 'Actual price',
              rotation: 90,
            },
          },
        ],
        title: {
          text: 'Price',
        },
      },
      yAxis: [
        {
          lineWidth: 1,
          gridLineWidth: 1,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: 'inside',
          labels: {
            align: 'left',
            x: 8,
          },
        },
        {
          opposite: true,
          linkedTo: 0,
          lineWidth: 1,
          gridLineWidth: 0,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: 'inside',
          labels: {
            align: 'right',
            x: -8,
          },
        },
      ],
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillOpacity: 0.2,
          lineWidth: 1,
          step: 'center',
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
        valueDecimals: 2,
      },
      series: [
        {
          name: 'Bids',
          data: bidData.map(({ quantity }) => [parseFloat(quantity)]),
          color: '#03a7a8',
        },
        {
          name: 'Asks',
          data: askData.map(({quantity }) => [parseFloat(quantity)]),
          color: '#fc5857',
        },
      ],
    };

    const chart = new Highcharts.Chart(chartOptions);

    return () => {
      chart.destroy();
    };
  }, [selectedSymbol, count]);

  return <div id="container"></div>;
}

export default DepthChart;
