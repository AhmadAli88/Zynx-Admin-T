"use strict";

/* basic pie chart */
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    height: 300,
    type: "pie",
  },
  colors: ["#735dff", "#ff5a29", "rgb(12, 199, 99)", "#0ca3e7", "rgb(255, 154, 19)"],
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  legend: {
    position: "bottom",
      markers: {
          size: 4,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
    },
  },
};
var chart = new ApexCharts(document.querySelector("#pie-basic"), options);
chart.render();

/* simple donut chart */
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
    height: 290,
  },
  legend: {
    position: "bottom",
      markers: {
          size: 4,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
  },
  colors: ["#735dff", "#ff5a29", "rgb(12, 199, 99)", "#0ca3e7", "rgb(255, 154, 19)"],
  dataLabels: {
    dropShadow: {
      enabled: false,
    },
  },
};
var chart = new ApexCharts(document.querySelector("#donut-simple"), options);
chart.render();


/* monochrome pie chart */
var options = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
    height: "280",
    type: "pie",
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  theme: {
    monochrome: {
      enabled: true,
      color: "#735dff",
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
  title: {
    text: "Monochrome Pie",
    align: "left",
    style: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#8c9097",
    },
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
    dropShadow: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
};
var chart = new ApexCharts(document.querySelector("#pie-monochrome"), options);
chart.render();

/* graidnet donut chart */
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    height: 310,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },
  colors: ["#735dff", "#ff5a29", "rgb(12, 199, 99)", "#0ca3e7", "rgb(255, 154, 19)"],
  title: {
    text: "Gradient Donut with custom Start-angle",
    align: "left",
    style: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#8c9097",
    },
  },
  legend: {
    position: "bottom",
      markers: {
          size: 4,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
  },
};
var chart = new ApexCharts(document.querySelector("#donut-gradient"), options);
chart.render();

/* patterned donut chart */
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    height: 300,
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  colors: ["#735dff", "#ff5a29", "#f4a742", "#0ca3e7", "#fe5454"],
  labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#111"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      borderWidth: 0,
    },
  },
  legend: {
    show: true,
    position: "bottom",
    offsetX: 0,
    offsetY: 8,
    markers: {
        size: 4,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
},
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: [
        "verticalLines",
        "squares",
        "horizontalLines",
        "circles",
        "slantedLines",
      ],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  theme: {
    palette: "palette2",
  },
  title: {
    text: "Favourite Movie Type",
    align: "left",
    style: {
      fontSize: "13px",
      fontWeight: "bold",
      color: "#8c9097",
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
var chart = new ApexCharts(document.querySelector("#donut-pattern"), options);
chart.render();

/* pie chart with image fill */
var options = {
  series: [44, 33, 54, 45],
  chart: {
    height: 300,
    type: "pie",
  },
  colors: ["#735dff", "#ff5a29", "rgb(12, 199, 99)", "#0ca3e7", "rgb(255, 154, 19)"],
  fill: {
    type: "image",
    opacity: 0.85,
    image: {
      src: [
        "https://codeigniter.spruko.com/zynix/zynix/assets/images/media/media-21.jpg",
        "https://codeigniter.spruko.com/zynix/zynix/assets/images/media/media-21.jpg",
        "https://codeigniter.spruko.com/zynix/zynix/assets/images/media/media-21.jpg",
        "https://codeigniter.spruko.com/zynix/zynix/assets/images/media/media-21.jpg",
      ],
      width: 25,
      imagedHeight: 25,
    },
  },
  stroke: {
    width: 4,
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#111"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      borderWidth: 0,
    },
  },
  legend: {
    position: "bottom",
      markers: {
          size: 4,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
  },
};
var chart = new ApexCharts(document.querySelector("#pie-image"), options);
chart.render();

/* updating donut chart */
var options = {
    series: [44, 55, 13, 33],
    chart: {
    width: 300,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#735dff", "#ff5a29", "rgb(12, 199, 99)", "#0ca3e7", "rgb(255, 154, 19)"],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 260
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: true,
    position: 'bottom',
      markers: {
          size: 4,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
  }
  };

  var chart = new ApexCharts(document.querySelector("#donut-update"), options);
  chart.render();


  function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function() {
  chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function() {
  chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function() {
  chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function() {
  chart.updateSeries(reset())
})
