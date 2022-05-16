import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Bar2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Bar2D, FusionTheme);

const SimpleBar = ({ data }) => {
  const result = [];

  // extracting all unique likelihood values
  data.forEach(({ intensity, likelihood }) => {
    if (likelihood != null) {
      const index = result.findIndex(
        (element) => element.likelihood === likelihood
      );

      if (index === -1) {
        result.push({ likelihood: likelihood, intensity: intensity, count: 1 });
      } else {
        result[index].intensity += intensity;
        result[index].count += 1;
      }
    }
  });

  result.sort((a, b) => a.likelihood - b.likelihood);

  // formatting values of both axis
  result.forEach(({ intensity, likelihood, count }, index) => {
    result[index] = { label: String(likelihood), value: intensity / count };
  });

  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: "400",
    dataFormat: "JSON",
    dataSource: {
      chart: {
        caption: "Article's likelihood vs average intensity",
        yaxisname: "Average intensity",
        aligncaptionwithcanvas: "0",
        plottooltext: "<b>$dataValue</b> average intensity",
        theme: "candy",
      },
      data: result,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default SimpleBar;
