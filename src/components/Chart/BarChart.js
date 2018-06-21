import React, { Component, createRef } from 'react';
import Chart from 'chart.js';

export default class BarChart extends Component {

  constructor(props) {
    super(props);

    this.canvas = createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Week1", "Week2", "Week3", "Week4", "Week5"],
        datasets: [{
          label: '# of Votes',
          data: [8, 10, 3, 5, 2],
          backgroundColor: [
              '#434E86',
              '#6370B0',
              '#9A95D0',
              '#985FBE',
              '#D9D7ED',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
  });
  }

  render() {
    return (
      <canvas ref={this.canvas}></canvas>
    );
  }
}
