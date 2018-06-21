import { course as cons } from '../constants';
import { fromJS, List, Map } from 'immutable';

const initialState = fromJS({
	load: false,
	loadSuc: false,
	loadErr: false,
  loadTables: false,
  loadTablesSuc: false,
  loadTablesErr: false,
	courses: List(),
  tables: List(),
  course: Map(),
  table: '',
});

export default function course(state = initialState, action = {}) {

	switch(action.type) {
		case cons.LOAD:
			return state.merge({
		    load: true,
		    loadSuc: false,
		    loadErr: false,
		  });
	  case cons.LOAD_SUCCESS: {
	    return state.merge({
	      load: false,
	      loadSuc: true,
	      loadErr: false,
	      courses: fromJS(action.data),
	    });
	  }
	  case cons.LOAD_FAIL:
	    return state.merge({
	      load: false,
	      loadSuc: false,
	      loadErr: action.error,
	  	});
    case cons.LOAD_TABLES: {
      const courseId = parseInt(action.courseId);
      const course = state.get('courses').find(el => el.get('id') === courseId);

      return state.merge({
        loadTables: true,
        loadTablesSuc: false,
        loadTablesErr: false,
        course: course,
      });
    }
    case cons.LOAD_TABLES_SUCCESS: {
      return state.merge({
        loadTables: false,
        loadTablesSuc: true,
        loadTablesErr: false,
        tables: fromJS(action.data),
      });
    }
    case cons.LOAD_TABLES_FAIL:
      return state.merge({
        loadTables: false,
        loadTablesSuc: false,
        loadTablesErr: action.error,
      });
	  default:
	  	return state;
	}
}
