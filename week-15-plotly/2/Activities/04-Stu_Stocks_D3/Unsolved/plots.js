const apiKey = "LyqNE-7T5PxnzK5nsRaq";

/* global Plotly */
const url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */

const unpack = (rows, index) => {
  return rows.map(row =>row[index]);
}

/**
 * Fetch data and build the timeseries plot
 */
const buildPlot = () => {
  // const dataPromise = ;
  d3.json(url).then(
    (data) => {
    console.log(data)
      const name = data.dataset.name;
      const stock = data.dataset.dataset_code;
      const startDate = data.dataset.start_date;
      const endDate = data.dataset.end_date;
      const dates = unpack(data.dataset.data, 0)
      const closingPrices = unpack(data.dataset.data, 4)
      console.log(dates);
      console.log(closingPrices);
      const trace =[{
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      }]

      const layout = {
        title: `${stock} closing prices`,
        xaxis: {
          range: [startDate, endDate],
          type: 'date'
        },
        yaxis: {
          autorange: true,
          type: 'linear'
        }
      }
      Plotly.newPlot("plot", trace, layout)


    }
  )
}

buildPlot();
