import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { Dropdown } from '../../components';

export default class Header extends PureComponent {

  constructor(props) {
    super(props);

    this.getTables = this.getTables.bind(this);
  }

  renderDropdowns() {
    const { courses } = this.props;
    const result = [];

    courses.forEach((group, college) => {
      result.push(
        <Dropdown key={college} text={college}>
           <ul className="list">
            {
              group.map(course => {
                const id = course.get('id');
                const name = course.get('name');

                return <li key={name} className="item" data-id={id} onClick={this.getTables}>{name}</li>
              })
            }
          </ul>
        </Dropdown>
      );
    });

    return result;
  }

  getTables(e) {
    const { getTables } = this.props;
    const id = e.currentTarget.getAttribute('data-id');

    return getTables(id);
  }


	render() {

		// return (
		// 	<div className="header">
  //       <NavLink exact to="/" className="link" activeClassName="active">TODO LIST</NavLink>
  //       <NavLink exact to="/new_task" className="link" activeClassName="active">NEW TASK</NavLink>
		// 	</div>
		// );

    return (
      <div className="header">
        <div className="title">COURSERA DASHBOARD</div>
        {this.renderDropdowns()}
      </div>
    );
	}
}
