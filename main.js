// Bar chart Vega-Lite JSON
var vg_1 = "temp1.vg.json";  // Bar chart specification
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    console.log('Bar chart rendered successfully!');
}).catch(console.error);

// Scatter plot Vega-Lite JSON
var vg_2 = "scatter_plot.vg.json";  // Scatter plot specification
vegaEmbed("#scatter_plot", vg_2).then(function(result) {
    console.log('Scatter plot rendered successfully!');
}).catch(console.error);
