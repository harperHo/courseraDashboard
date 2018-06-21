import { course as cons } from '../constants';

export function getCourses() {
  return (dispatch) => {
    dispatch({
      type: cons.LOAD
    });
    fetch('http://localhost:3000/course/courses')
      .then(response => {
        const status = response.status;

        if (status !== 200) throw status;

        return response.json();
      })
      .then(json => {
        dispatch({
          type: cons.LOAD_SUCCESS,
          data: json
        });
      })
      .catch(err => {
        dispatch({
          type: cons.LOAD_FAIL,
          error: err
        });
      });
  };
}

export function getTables(id) {
  return (dispatch) => {
    dispatch({
      type: cons.LOAD_TABLES,
      courseId: id,
    });
    fetch(`http://localhost:3000/course/${id}/tables`)
      .then(response => {
        const status = response.status;

        if (status !== 200) throw status;

        return response.json();
      })
      .then(json => {
        dispatch({
          type: cons.LOAD_TABLES_SUCCESS,
          data: json
        });
      })
      .catch(err => {
        dispatch({
          type: cons.LOAD_TABLES_FAIL,
          error: err
        });
      });
  };
}
