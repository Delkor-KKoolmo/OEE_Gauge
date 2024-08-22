var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

const gaugeData = [
  {
    value: 84.7,
    name: "OEE",
    title: {
      show: true,
      fontSize: 30,
      fontWeight: "bold",
      offsetCenter: ["0%", "55%"],
      color: "#777777",
    },
    detail: {
      //Current Value Label
      show: true,
      fontSize: 80,
      offsetCenter: ["0%", "30%"],
      valueAnimation: true,
      formatter: function (value) {
        return value.toFixed(1) + "%";
      },
      color: "#000", // Set a specific color for the detail text
    },
  },
];

option = {
  series: [
    {
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      center: ["50%", "65%"],
      radius: "100%",
      min: 0,
      max: 100,
      splitNumber: 38,
      axisLine: {
        show: false, // Hide the axis line
        lineStyle: {
          color: [
            [0.4, "#E46713"], // Orange
            [0.7, "#DE9300"], // Yellow
            [0.85, "#2C9C2C"], // Light Green
            [1.0, "#0A580A"], // Dark Green
          ],
          width: 20, // Width of the axis line
        },
      },
      progress: {
        show: true,
        width: 60, // Set the width of the progress bar
        itemStyle: {
          opacity: "15%",
          color: "#0a152f26",
        },
      },
      pointer: {
        show: true, // Ensure the pointer is visible
        icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
        length: "70%", // Length of the pointer
        width: "10%", // Width of the pointer
        offsetCenter: [0, 0],
        itemStyle: {
          color: "#000", // Black pointer color
        },
      },
      splitLine: {
        length: "8%",
        distance: -60,
        lineStyle: {
          width: 9, // Width of the split lines
          color: "auto", // Color of the split lines
          cap: "round",
        },
      },
      axisTick: {
        show: false, // Show the axis ticks
        lineStyle: {
          width: 2, // Width of the ticks
          color: "auto", // Color of the axis ticks
        },
      },
      axisLabel: {
        show: false,
      },
      data: gaugeData,
    },
  ],
};

setInterval(function () {
  gaugeData[0].value = +(Math.random() * 100).toFixed(2);
  myChart.setOption({
    series: [
      {
        data: gaugeData,
      },
    ],
  });
}, 2000);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
