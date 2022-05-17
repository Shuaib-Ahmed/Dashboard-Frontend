import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ScrollColumn2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, ScrollColumn2D, FusionTheme);

const ScrollChart = ({ data }) => {
  const result = [];

  data.forEach(({ country }) => {
    if (country.length > 0) {
      const index = result.findIndex((element) => element.country === country);

      if (index === -1) {
        result.push({ country: country, count: 1 });
      } else {
        result[index].count += 1;
      }
    }
  });

  result.sort((a, b) => {
    return b.count - a.count;
  });

  const categoryData = result.map(({ country }) => {
    return { label: country };
  });

  const dataSetValue = result.map(({ count }) => {
    return { value: count };
  });

  const chartConfigs = {
    type: "scrollcolumn2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Total Articles published a countrie",
        subcaption: "By Countries",
        yaxisname: "Count of Articles",
        numvisibleplot: "8",
        labeldisplay: "auto",
        theme: "candy",
      },
      categories: [
        {
          category: [...categoryData],
        },
      ],
      dataset: [
        {
          seriesname: "",
          data: [...dataSetValue],
        },
      ],
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ScrollChart;
