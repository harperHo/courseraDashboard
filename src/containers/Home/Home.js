import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, is } from 'immutable';


import { getTables } from '../../redux/actionCreators/course';
import { Sidebar, Dashboard } from '../../components';

@connect(
 state => ({
   loadTables: state.course.get('loadTables'),
   loadTablesSuc: state.course.get('loadTablesSuc'),
   loadTablesErr: state.course.get('loadTablesErr'),
   tables: state.course.get('tables'),
   course: state.course.get('course'),
 })
)
export default class Home extends Component {

	constructor(props) {
		super(props);

    this.state = {
      tables: List(),
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
    const { course } = this.props;
		const { tables } = this.state;

    const hasContent = tables && tables.size > 0;
    const courseName = course ? course.get('name') : '';
    const college = course ? course.get('college') : '';

    return (
      <div className={`home ${hasContent ? '' : 'no-content'}`}>
        {
          !hasContent &&
            <span className="text">請選擇一個課程</span>
        }
        <Sidebar tables={tables}/>
        <Dashboard courseName={courseName} college={college} />
      </div>
    );
	}
}
