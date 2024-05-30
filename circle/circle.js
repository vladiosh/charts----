let data = [
  {
    values: [2600],
    text: "Господарські <b style='text-decoration: none;'>%v</b>",
    backgroundColor: "#0a610e",
    highlightState: { borderColor: "#0a610e", borderWidth: "7px" },
  },
  {
    values: [650],
    text: "Цивільні <b style='text-decoration: none;'>%v</b>",
    backgroundColor: "#287715",
    highlightState: { borderColor: "#287715", borderWidth: "7px" },
  },
  {
    values: [483],
    text: "Адміністративні <b style='text-decoration: none;'>%v</b>",
    backgroundColor: "#169116",
    highlightState: { borderColor: "#169116", borderWidth: "7px" },
  },
  {
    values: [105],
    text: "Кримінальні <b style='text-decoration: none;'>%v</b>",

    backgroundColor: "#17d317",
    highlightState: { borderColor: "#17d317", borderWidth: "7px" },
  },
  {
    values: [32],
    text: "Адміністративні правопорушення   <b style='text-decoration: none;'>%v</b>",

    backgroundColor: "#43eb19",
    highlightState: { borderColor: "#43eb19", borderWidth: "7px" },
  },
];


// _____________________

data.forEach((serie) => {
  serie.hoverState = {
    visible: true,
    borderWidth: "12px",
    borderColor: serie.backgroundColor,
  };
});

let chartConfig = {
  type: "ring",

  gui: {

    menu: {
      visible: false,
    },
  },
  legend: {
    highlightLegend: true,
    highlightPlot: true,
    toggleAction: "none",
    align: "right",

    verticalAlign: "middle",
    borderWidth: 0,

    marker: {
      type: "circle",
    },
    item: {
      fontSize: 16,
      cursor: "pointer",
      underline: true,

      highlightState: {
        fontColor: "green",
      },
    },
  },

  title: {
    text: "За формами судочинства",
    offsetX: -180,
    fontSize: 20,
  },
  plot: {
    slice: 70,
    detach: false,

    valueBox: {
      visible: false,
    },
    tooltip: {
      text: "%v",
      visible: false,
    },

    angle: 180,
  },

  series: data,
};

zingchart.render({
  id: "chartDiv",
  data: chartConfig,
  height: 300,
  width: "100%",
});
