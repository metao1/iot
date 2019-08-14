let graphPresets = {
  options : {
    scales : {
        xAxes: [{
            ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
        }],
        yAxes: [{
            ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
        }]
    },
    legend : {
      labels: {
        fontColor: '#ebebeb'
      }
    },
    scaleShowVerticalLines: false,
    responsive: true
  },

  legend: true,

  chartColors: [
    {
      hoverBackgroundColor: '#d5bc00',
      backgroundColor: '#5bc0de'
    },
    {
      hoverBackgroundColor: '#449d44',
      backgroundColor: '#5cb85c'
    }
  ]
}
export {graphPresets};
