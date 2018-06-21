import React, { Component, createRef } from 'react';
import Chart from 'chart.js';

export default class LineChart extends Component {

  constructor(props) {
    super(props);

    this.canvas = createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Week1", "Week2", "Week3", "Week4", "Week5"],
        datasets: [{
          label: '# of Students',
            backgroundColor: '#E47D96',
            borderColor: '#E47D96',
            data: [0, 10, 5, 2, 20],
        }]
      },
    });
  }

  render() {
    return (
      <canvas ref={this.canvas}></canvas>
    );
  }
}
