import React from "react";
import Chart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            offsetX:-30,
          id: "pie-chart",
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 300
            }
          }
        },
        colors: ["#98D89E", "#EE8484", "#F7DC7D"],
        labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
        title: {
            offsetX:40,
          text: "Top Products",
          align: "left",
          style: {
            marginTop: "3rem",
          fontSize: "18px",
          color: "#263238",
          fontFamily: 'Montserrat',
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "11px"
          }
        },
        subtitle: {
            offsetY:60,
          text: "May-June 2021",
          align: "right",
          margin: 5,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: "14px",
            color: "#aaa"
          }
        },
        legend: {
            offsetY:60,
          position: "right",
          verticalAlign: "middle",
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          fontWeight: 400,
          itemMargin: {
            vertical: 5,
            horizontal: 0
          },
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              value: false,
              offset: -20,
              height: "100%"
            }
          }
        }
      },
      series: [55, 31, 14]
    };
  }

  render() {
    return (
      <div className="pie-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height="200"
        />
      </div>
    );
  }
}

export default PieChart;