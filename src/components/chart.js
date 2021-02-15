import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown.js";
import { Row, Col } from "react-bootstrap";

drilldown(Highcharts);

function chartcomponent() {
  console.log(process.env)
  // const getData = (value, name) => {
  //     return [[`First ${name}`, value], [`Second ${name}`, value * 2]];
  //   };

  // var charts_depth = 0;

  // var drilldown = function (e, point) {
  //   var pointName = e.point.name;

  //   // eslint-disable-next-line eqeqeq
  //   if (point.options.chart.chart_depth == charts_depth) {
  //     point.options.chart.chart_depth++;

  //     let charts = Highcharts.charts;
  //     Highcharts.each(charts, function (c) {
  //       // eslint-disable-next-line eqeqeq
  //       if (c.options.chart.chart_depth == charts_depth) {
  //         c.options.chart.chart_depth++;

  //         Highcharts.each(c.series[0].data, function (p) {
  //           if (p.name === pointName) {
  //             p.doDrilldown();
  //           }
  //         });
  //       }
  //     });
  //     charts_depth++;
  //   }
  // };

  // var drillup = function (e) {
  //   let chart = e.target.options.chart;

  //   // eslint-disable-next-line eqeqeq
  //   if (chart.chart_depth == charts_depth) {
  //     chart.chart_depth--;
  //     var charts = Highcharts.charts;
  //     Highcharts.each(charts, function (c) {
  //       // eslint-disable-next-line eqeqeq
  //       if (c.options.chart.chart_depth == charts_depth) {
  //         c.options.chart.chart_depth--;
  //         c.drillUp();
  //       }
  //     });
  //     charts_depth--;
  //   }
  // };

  const options = {
    chart: {
      type: "line",
      chart_depth: 0,
      chart_n: 1,
      // events: {
      //   drilldown: function (e) {
      //     drilldown(e, this);
      //   },
      //   drillup: function (e) {
      //     drillup(e);
      //   },
      // // },
    },
    title: {
      useHTML: true,
      align: "center",
      text: "กราฟแสดงจำนวนรถเข้า (รายวัน)",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    subtitle: {
      useHTML: true,
      align: "center",
      text: "แสดงจำนวนรถเข้า (รายวัน)",
    },
    // accessibility: {
    //     announceNewData: {
    //       enabled: true
    //     }
    //   },

    xAxis: {
      type: "category",
    },
    yAxis: {
      min: 0, // Lowest value to show on the yAxis
      title: {
        useHTML: true,
        text: "จำนวนรถ", // Title for the yAxis
      },
    },
    legend: {
      enabled: false, // Enable/Disable the legend
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: "{point.y}คัน",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: ยอดจอด <b>{point.y}</b> คัน <br/>',
      ///shared: false // If you have multiple series then all points in each category will show up on one tooltip
    },
    series: [
      {
        name: "park_2020",
        colorByPoint: true,
        data: [
          { name: "22/12/2020", y: 34, drilldown: "22/12/2020" },
          { name: "23/12/2020", y: 66, drilldown: "23/12/2020" },
          { name: "24/12/2020", y: 50, drilldown: "24/12/2020" },
          { name: "25/12/2020", y: 35, drilldown: "25/12/2020" },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "22/12/2020",
          id: "22/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "22/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "22/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "22/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "22/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "22/12/2020_12:00" },
            { name: "13:00", y: 25, drilldown: "22/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "22/12/2020_14:00" },
            { name: "15:00", y: 31, drilldown: "22/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "22/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "22/12/2020_17:00" },
            { name: "18:00", y: 5, drilldown: "22/12/2020_18:00" },
          ],
        },
        {
          name: "23/12/2020",
          id: "23/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "23/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "23/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "23/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "23/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "23/12/2020_12:00" },
            { name: "13:00", y: 66, drilldown: "23/12/2020_13:00" },
            { name: "14:00", y: 57, drilldown: "23/12/2020_14:00" },
            { name: "15:00", y: 31, drilldown: "23/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "23/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "23/12/2020_17:00" },
            { name: "18:00", y: 5, drilldown: "23/12/2020_18:00" },
          ],
        },
        {
          name: "24/12/2020",
          id: "24/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "24/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "24/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "24/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "24/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "24/12/2020_12:00" },
            { name: "13:00", y: 25, drilldown: "24/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "24/12/2020_14:00" },
            { name: "15:00", y: 50, drilldown: "24/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "24/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "24/12/2020_18:00" },
            { name: "18:00", y: 5, drilldown: "24/12/2020_18:00" },
          ],
        },
        {
          name: "25/12/2020",
          id: "25/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "25/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "25/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "25/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "25/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "25/12/2020_12:00" },
            { name: "13:00", y: 35, drilldown: "25/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "25/12/2020_14:00" },
            { name: "15:00", y: 20, drilldown: "25/12/2020_15:00" },
            { name: "16:00", y: 0, drilldown: "25/12/2020_16:00" },
            { name: "17:00", y: 0, drilldown: "25/12/2020_17:00" },
            { name: "18:00", y: 0, drilldown: "25/12/2020_18:00" },
          ],
        },
        {
          name: "7:00-8:00",
          id: "22/12/2020_8:00",
          data: [
            { name: "7:01", y: 1 },
            { name: "7:05", y: 1 },
            { name: "7:10", y: 1 },
            { name: "7:15", y: 2 },
            { name: "7:20", y: 1 },
            { name: "7:25", y: 1 },
            { name: "7:30", y: 2 },
            { name: "7:35", y: 3 },
            { name: "7:40", y: 1 },
            { name: "7:45", y: 2 },
            { name: "7:50", y: 3 },
            { name: "7:55", y: 4 },
            { name: "8:00", y: 5 },
          ],
        },
      ],
    },
  };

  ///-------------------------------------------------------------------------------------------------
  const options2 = {
    chart: {
      type: "line",
      chart_depth: 0,
      chart_n: 2,
      // events: {
      //   drilldown: function (e) {
      //     drilldown(e, this);
      //   },
      //   drillup: function (e) {
      //     drillup(e);
      //   },
      // },
    },
    title: {
      useHTML: true,
      align: "center",
      text: "กราฟแสดงจำนวนรถออก (รายวัน)",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    subtitle: {
      useHTML: true,
      align: "center",
      text: "แสดงจำนวนรถออก (รายวัน) ",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },

    xAxis: {
      type: "category",
    },
    yAxis: {
      min: 0, // Lowest value to show on the yAxis
      title: {
        useHTML: true,
        text: "จำนวนรถ", // Title for the yAxis
      },
    },
    legend: {
      enabled: false, // Enable/Disable the legend
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: "{point.y} คัน",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: ยอดจอด <b>{point.y}</b> คัน <br/>',
      ///shared: false // If you have multiple series then all points in each category will show up on one tooltip
    },
    series: [
      {
        name: "park_2020",
        colorByPoint: true,
        data: [
          { name: "22/12/2020", y: 34, drilldown: "22/12/2020" },
          { name: "23/12/2020", y: 66, drilldown: "23/12/2020" },
          { name: "24/12/2020", y: 50, drilldown: "24/12/2020" },
          { name: "25/12/2020", y: 35, drilldown: "25/12/2020" },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "22/12/2020",
          id: "22/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "22/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "22/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "22/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "22/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "22/12/2020_12:00" },
            { name: "13:00", y: 25, drilldown: "22/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "22/12/2020_14:00" },
            { name: "15:00", y: 31, drilldown: "22/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "22/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "22/12/2020_17:00" },
            { name: "18:00", y: 5, drilldown: "22/12/2020_18:00" },
          ],
        },
        {
          name: "23/12/2020",
          id: "23/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "23/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "23/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "23/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "23/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "23/12/2020_12:00" },
            { name: "13:00", y: 66, drilldown: "23/12/2020_13:00" },
            { name: "14:00", y: 57, drilldown: "23/12/2020_14:00" },
            { name: "15:00", y: 31, drilldown: "23/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "23/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "23/12/2020_17:00" },
            { name: "18:00", y: 5, drilldown: "23/12/2020_18:00" },
          ],
        },
        {
          name: "24/12/2020",
          id: "24/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "24/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "24/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "24/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "24/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "24/12/2020_12:00" },
            { name: "13:00", y: 25, drilldown: "24/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "24/12/2020_14:00" },
            { name: "15:00", y: 50, drilldown: "24/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "24/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "24/12/2020_18:00" },
            { name: "18:00", y: 5, drilldown: "24/12/2020_18:00" },
          ],
        },
        {
          name: "25/12/2020",
          id: "25/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "25/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "25/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "25/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "25/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "25/12/2020_12:00" },
            { name: "13:00", y: 35, drilldown: "25/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "25/12/2020_14:00" },
            { name: "15:00", y: 20, drilldown: "25/12/2020_15:00" },
            { name: "16:00", y: 0, drilldown: "25/12/2020_16:00" },
            { name: "17:00", y: 0, drilldown: "25/12/2020_17:00" },
            { name: "18:00", y: 0, drilldown: "25/12/2020_18:00" },
          ],
        },

        {
          id: "22/12/2020_8:00",
          data: [
            { name: "7:01", y: 1 },
            { name: "7:05", y: 1 },
            { name: "7:10", y: 1 },
            { name: "7:15", y: 2 },
            { name: "7:20", y: 1 },
            { name: "7:25", y: 1 },
            { name: "7:30", y: 2 },
            { name: "7:35", y: 3 },
            { name: "7:40", y: 1 },
            { name: "7:45", y: 2 },
            { name: "7:50", y: 3 },
            { name: "7:55", y: 4 },
            { name: "8:00", y: 5 },
          ],
        },
      ],
    },
  };
  const options3 = {
    chart: {
      type: "line",
      chart_depth: 0,
      chart_n: 2,
      // events: {
      //   drilldown: function (e) {
      //     drilldown(e, this);
      //   },
      //   drillup: function (e) {
      //     drillup(e);
      //   },
      // },
    },
    title: {
      useHTML: true,
      align: "center",
      text: "กราฟแสดงจำนวนรถที่จอด (รายวัน)",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#123E69",
      },
    },
    subtitle: {
      useHTML: true,
      align: "center",
      text: "แสดงจำนวนรถที่จอดอยู่ในลานจอดรถ (รายวัน) ",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },

    xAxis: {
      type: "category",
    },
    yAxis: {
      min: 0, // Lowest value to show on the yAxis
      title: {
        useHTML: true,
        text: "จำนวนรถ", // Title for the yAxis
      },
    },
    legend: {
      enabled: false, // Enable/Disable the legend
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: "{point.y} คัน",
        },
      },
    },

    tooltip: {
      useHTML: true,
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<img src = "{point.image}" height="124" width="183"/>',
      ///shared: false // If you have multiple series then all points in each category will show up on one tooltip
    },
    series: [
      {
        name: "park_2020",
        colorByPoint: true,
        data: [
          {
            name: "22/12/2020",
            y: 34,
            image: "https://source.unsplash.com/VtfiPvSGh5s",
            drilldown: "22/12/2020",
          },
          {
            name: "23/12/2020",
            y: 66,
            image: "https://source.unsplash.com/N9Pf2J656aQ",
            drilldown: "23/12/2020",
          },
          {
            name: "24/12/2020",
            y: 50,
            image: "https://source.unsplash.com/YApiWyp0lqo",
            drilldown: "24/12/2020",
          },
          {
            name: "25/12/2020",
            y: 35,
            image: "https://source.unsplash.com/YApS6TjKJ9c",
            drilldown: "25/12/2020",
          },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "22/12/2020",
          id: "22/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5,image: process.env.REACT_APP_UNSPLASH_URL, drilldown: "22/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "22/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "22/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "22/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "22/12/2020_12:00" },
            { name: "13:00", y: 25, drilldown: "22/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "22/12/2020_14:00" },
            { name: "15:00", y: 31, drilldown: "22/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "22/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "22/12/2020_17:00" },
            { name: "18:00", y: 5, drilldown: "22/12/2020_18:00" },
          ],
        },
        {
          name: "23/12/2020",
          id: "23/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "23/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "23/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "23/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "23/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "23/12/2020_12:00" },
            { name: "13:00", y: 66, drilldown: "23/12/2020_13:00" },
            { name: "14:00", y: 57, drilldown: "23/12/2020_14:00" },
            { name: "15:00", y: 31, drilldown: "23/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "23/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "23/12/2020_17:00" },
            { name: "18:00", y: 5, drilldown: "23/12/2020_18:00" },
          ],
        },
        {
          name: "24/12/2020",
          id: "24/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "24/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "24/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "24/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "24/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "24/12/2020_12:00" },
            { name: "13:00", y: 25, drilldown: "24/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "24/12/2020_14:00" },
            { name: "15:00", y: 50, drilldown: "24/12/2020_15:00" },
            { name: "16:00", y: 34, drilldown: "24/12/2020_16:00" },
            { name: "17:00", y: 17, drilldown: "24/12/2020_18:00" },
            { name: "18:00", y: 5, drilldown: "24/12/2020_18:00" },
          ],
        },
        {
          name: "25/12/2020",
          id: "25/12/2020",
          colorByPoint: true,
          data: [
            { name: "8:00", y: 5, drilldown: "25/12/2020_8:00" },
            { name: "9:00", y: 7, drilldown: "25/12/2020_9:00" },
            { name: "10:00", y: 9, drilldown: "25/12/2020_10:00" },
            { name: "11:00", y: 12, drilldown: "25/12/2020_11:00" },
            { name: "12:00", y: 10, drilldown: "25/12/2020_12:00" },
            { name: "13:00", y: 35, drilldown: "25/12/2020_13:00" },
            { name: "14:00", y: 27, drilldown: "25/12/2020_14:00" },
            { name: "15:00", y: 20, drilldown: "25/12/2020_15:00" },
            { name: "16:00", y: 0, drilldown: "25/12/2020_16:00" },
            { name: "17:00", y: 0, drilldown: "25/12/2020_17:00" },
            { name: "18:00", y: 0, drilldown: "25/12/2020_18:00" },
          ],
        },

        {
          id: "22/12/2020_8:00",
          data: [
            { name: "7:01",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 1 },
            { name: "7:05",image: "https://source.unsplash.com/YApiWyp0lqo", y: 1 },
            { name: "7:10",image: "https://source.unsplash.com/aiwuLjLPFnU", y: 1 },
            { name: "7:15",image: "https://source.unsplash.com/m3m-lnR90uM", y: 2 },
            { name: "7:20",image: "https://source.unsplash.com/KQjBXXPRsYM", y: 1 },
            { name: "7:25",image: "https://source.unsplash.com/N9Pf2J656aQ", y: 1 },
            { name: "7:30",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 2 },
            { name: "7:35",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 3 },
            { name: "7:40",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 1 },
            { name: "7:45",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 2 },
            { name: "7:50",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 3 },
            { name: "7:55",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 4 },
            { name: "8:00",image: "https://source.unsplash.com/VtfiPvSGh5s", y: 5 },
          ],
        },
      ],
    },
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" md="12" xl="12">
            <Card border="secondary" className="card">
              <HighchartsReact highcharts={Highcharts} options={options3} />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="6">
            <Card border="secondary" className="card">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="6">
            <Card border="secondary" className="card">
              <HighchartsReact highcharts={Highcharts} options={options2} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default chartcomponent;
