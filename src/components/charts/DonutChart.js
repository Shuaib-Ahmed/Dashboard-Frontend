import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Doughnut2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Doughnut2D, FusionTheme);

const DonutChart = ({ data }) => {
  const result = [];

  // formatting values of both axis
  data.forEach(({ topic }) => {
    if (topic.length > 0) {
      const index = result.findIndex(({ label }) => label === topic);

      if (index === -1) {
        result.push({ label: topic, value: 1 });
      } else {
        result[index].value += 1;
      }
    }
  });

  result.sort((a, b) => b.value - a.value);

  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Article's topic ratio",
        showpercentvalues: "1",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext: "<b>$percentValue</b> of topics are on <b>$label</b>",
        centerlabel: "$label: $value",
        theme: "candy",
      },
      data: result,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default DonutChart;
