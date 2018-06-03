import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, is } from 'immutable';

import { Sidebar } from '../../components';

@connect(
 state => ({
   loadTables: state.course.get('loadTables'),
   loadTablesSuc: state.course.get('loadTablesSuc'),
   loadTablesErr: state.course.get('loadTablesErr'),
   tables: state.course.get('tables')
 })
)
export default class Home extends Component {

	constructor(props) {
		super(props);

    this.state = {
      courses: Map(),
    };
	}

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tables } = nextProps;
    const { tables: prevTables } = prevState;

    if (tables) {
      const _tables = tables.groupBy(tables => tables.get('category'));

      if (!is(prevTables, _tables)) {
        return {
          tables: _tables,
        };
      }
    }

    return null;
  }

	render() {
		const { tables } = this.state;

    return (
      <div className="dashboard">
        <Sidebar tables={tables}/>
      </div>
    );
	}
}
