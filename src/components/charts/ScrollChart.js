import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ScrollColumn2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, ScrollColumn2D, FusionTheme);

const ScrollChart = ({ data }) => {
  const result = [];

  data.forEach(({ country, published }) => {
    if (country.length > 0 && published.length > 0) {
      const year = new Date(published).getFullYear();
      const index = result.findIndex((element) => element.country === country);

      if (index === -1) {
        result.push({ country: country, articleData: { [year]: 1 } });
      } else {
        if (result[index].articleData[year] === undefined) {
          result[index].articleData[year] = 1;
        } else {
          result[index].articleData[year] += 1;
        }
      }
    }
  });

  console.log(result);

  const chartConfigs = {
    type: "scrollcolumn2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Summer Olympics Medal Tally",
        subcaption: "By Countries",
        yaxisname: "Count of Medals",
        numvisibleplot: "8",
        labeldisplay: "auto",
        theme: "candy",
      },
      categories: [
        {
          category: [
            {
              label: "USA",
            },
            {
              label: "GB",
            },
            {
              label: "China",
            },
            {
              label: "Russia",
            },
            {
              label: "Germany",
            },
            {
              label: "France",
            },
            {
              label: "Japan",
            },
            {
              label: "Australia",
            },
            {
              label: "Italy",
            },
            {
              label: "Canada",
            },
            {
              label: "South Korea",
            },
            {
              label: "Netherlands",
            },
            {
              label: "Brazil",
            },
            {
              label: "NZ",
            },
            {
              label: "Spain",
            },
            {
              label: "Hungary",
            },
            {
              label: "Kenya",
            },
            {
              label: "Jamaica",
            },
            {
              label: "Cuba",
            },
            {
              label: "Croatia",
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "2017",
          data: [
            {
              value: "121",
            },
            {
              value: "70",
            },
            {
              value: "67",
            },
            {
              value: "55",
            },
            {
              value: "42",
            },
            {
              value: "42",
            },
            {
              value: "41",
            },
            {
              value: "29",
            },
            {
              value: "28",
            },
            {
              value: "22",
            },
            {
              value: "21",
            },
            {
              value: "19",
            },
            {
              value: "19",
            },
            {
              value: "18",
            },
            {
              value: "17",
            },
            {
              value: "15",
            },
            {
              value: "13",
            },
            {
              value: "11",
            },
            {
              value: "11",
            },
            {
              value: "10",
            },
          ],
        },
        {
          seriesname: "2016",
          data: [
            {
              value: "123",
            },
            {
              value: "71",
            },
            {
              value: "59",
            },
            {
              value: "52",
            },
            {
              value: "34",
            },
            {
              value: "32",
            },
            {
              value: "29",
            },
            {
              value: "32",
            },
            {
              value: "25",
            },
            {
              value: "21",
            },
            {
              value: "24",
            },
            {
              value: "17",
            },
            {
              value: "20",
            },
            {
              value: "14",
            },
            {
              value: "13",
            },
            {
              value: "16",
            },
            {
              value: "14",
            },
            {
              value: "12",
            },
            {
              value: "11",
            },
            {
              value: "9",
            },
          ],
        },
        {
          seriesname: "2015",
          data: [
            {
              value: "123",
            },
            {
              value: "71",
            },
            {
              value: "59",
            },
            {
              value: "52",
            },
            {
              value: "34",
            },
            {
              value: "32",
            },
            {
              value: "29",
            },
            {
              value: "32",
            },
            {
              value: "25",
            },
            {
              value: "21",
            },
            {
              value: "24",
            },
            {
              value: "17",
            },
            {
              value: "20",
            },
            {
              value: "14",
            },
            {
              value: "13",
            },
            {
              value: "16",
            },
            {
              value: "14",
            },
            {
              value: "12",
            },
            {
              value: "11",
            },
            {
              value: "9",
            },
          ],
        },
      ],
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ScrollChart;
