import React from "react";
import Chart from "react-apexcharts";


const Linechart = () => {
  const options = {
    chart: {
        offsetY:-20,
      id: "multiline",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ["Week1", "Week2", "Week3", "Week4"]
    },
    yaxis: {
        
        tickValues: [0, 100, 200, 300, 400, 500],
        tickAmount: 6,
        labels: {
          formatter: function(value) {
            return value;
          }
        }
      },
    title: {
        offsetY:30,
      text: "Activities",
      align: "left",
      style: {
        // marginTop: "3rem",
        fontSize: "18px",
        color: "#263238",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "22px"
      }
    },
    subtitle: {
        offsetY:90,
        text: "May-June 2021",
        align: "right",
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "14px",
          color: "#aaa"
        }
      },
      
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: ["#333"],
        useSeriesColors: false
      },
      colors: ["#E9A0A0", "#9BDD7C"],
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      }
    },
    markers: {
      size: 0,
      style: "hollow"
    },
    stroke: {
      width: [3, 3],
      curve: "smooth"
    },
    grid: {
      borderColor: "#f1f1f1"
    }
  };

  const series = [
    {
      name: "Guest",
      data: [50, 220, 150, 350]
    },
    {
      name: "User",
      data: [150, 120, 250, 150]
    }
  ];

  return (
    <Chart options={options} series={series} type="line" height="220px" className="chartdata" />
  );
};

export default Linechart;
