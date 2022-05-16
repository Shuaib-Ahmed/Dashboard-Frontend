import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const BarChart = ({ data }) => {
  const result = [];

  // extracting all unique relevance values
  data.forEach(({ intensity, relevance }) => {
    if (relevance != null) {
      const index = result.findIndex((element) => {
        return element.relevance === relevance ? true : false;
      });

      if (index === -1) {
        result.push({ relevance: relevance, intensity: intensity, count: 1 });
      } else {
        result[index].intensity += intensity;
        result[index].count += 1;
      }
    }
  });

  result.sort((a, b) => a.relevance - b.relevance);

  // formatting values of both axis
  result.forEach(({ intensity, relevance, count }, index) => {
    result[index] = { label: String(relevance), value: intensity / count };
  });

  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Article's relevance vs average intensity",
        xAxisName: "Relevance",
        yAxisName: "Average Intensity",
        theme: "candy",
      },
      data: result,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default BarChart;
