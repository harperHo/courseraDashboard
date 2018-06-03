import React, { Component, createContext, createRef } from 'react';
import { connect } from 'react-redux';
import { Map, is } from 'immutable';

import { getCourses, getTables } from '../../redux/actionCreators/course';
import { Header } from '../../components';

@connect(
 state => ({
   load: state.course.get('load'),
   loadSuc: state.course.get('loadSuc'),
   loadErr: state.course.get('loadErr'),
   courses: state.course.get('courses')
 }),
 // dispatch => ({
 //  getTasks: () => dispatch(getTasks())
 // })
 {
   getCourses,
   getTables,
 }
)
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: Map(),
    };
  }

  componentDidMount() {
    this.props.getCourses();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { courses } = nextProps;
    const { courses: prevCourses } = prevState;

    if (courses) {
      const _courses = courses.groupBy(course => course.get('college'));

      if (!is(prevCourses, _courses)) {
        return {
          courses: _courses,
        };
      }
    }

    return null;
  }

	render() {
    const { getTables } = this.props;
    const { courses } = this.state;

		return (
			<div className="container">
				<Header courses={courses} getTables={getTables} />
				{this.props.children}
			</div>
		);
	}
}
