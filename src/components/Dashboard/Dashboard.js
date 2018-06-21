import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';

import { Dropdown, BarChart, LineChart } from '../../components';


export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

	render() {
    const { courseName, college } = this.props;

    return (
      <div className="dashboard">
        {
          courseName && college &&
            <Fragment>
              <div className="path">
                <span className="college">{college}</span>
                <span className="course-name">{courseName}</span>
              </div>
              {
                Math.random() > 0.5 ? <BarChart /> : <LineChart />
              }
            </Fragment>
        }

      </div>
    );
	}
}
