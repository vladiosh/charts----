const myConfig = {
  type: "hbar",
  plot: {
    stacked: true,
    borderRadius: 5,
    hoverState: {
      visible: false,
    },
    valueBox: {
      visible: true,
      text: "%t: %v",
      placement: "in",
    },
  },
  plotarea: {
    margin: "0 15 0 15",
  },
  scaleX: {
    visible: false,
  },
  scaleY: {
    visible: false,
  },
  series: [
    {
      values: [4560],
      backgroundColor: "#9FE6A0",
      text: "Перша",
    },
    {
      values: [345],
      backgroundColor: "#57C785",
      text: "Апеляційна",
    },
    {
      values: [90],
      backgroundColor: "#3A923A",
      text: "Касаційна",
    },
  ],
};

zingchart.render({
  id: "myChart",
  data: myConfig,
  height: "50px",
  width: "100%",
});


function enlargeSegment(index) {
  let newSeries = myConfig.series.map((segment, i) => {
    return {
      ...segment,
      barWidth: i === index ? "2.5rem" : "1rem", 
    };
  });
  zingchart.exec("myChart", "modify", {
    data: {
      series: newSeries,
    },
  });
}


zingchart.bind("myChart", "node_click", function (e) {
  enlargeSegment(e.nodeindex);
});
