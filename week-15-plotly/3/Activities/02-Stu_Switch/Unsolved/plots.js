// Initializes the page with a default plot
const init = () => {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 3, 4, 5],
  }]
  let chart = d3.select("#plot").node();
  Plotly.newPlot(chart, data);
}

// Call updatePlotly() when a change takes place to the DOM
const updatePlotly = () => {
  const dataset = d3.select("#selDataset").node().value;
  let chart = d3.select("#plot").node();

  let x = [];
  let y = [];

  switch (dataset) {
    case "dataset1":
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
      break;
    case "dataset2":
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];

      break;
    case "dataset3":
      x = [100, 200, 300, 400, 500];
      y = [10, 100, 50, 10, 0];
      break;
    default:
      break;
  }

  Plotly.restyle(chart, "x", [x]);
  Plotly.restyle(chart, "y", [y]);

}

d3.select("body").on("change", updatePlotly)

// This function is called when a dropdown menu item is selected

  // Use D3 to select the dropdown menu

  // Assign the value of the dropdown menu option to a variable


  // Initialize x and y arrays



  // Note the extra brackets around 'x' and 'y'

  init();