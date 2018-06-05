import { course as cons } from '../constants';
import Config from 'Config'

export function getCourses() {
  return (dispatch) => {
    dispatch({
      type: cons.LOAD
    });
    fetch(`${Config.apiServer}${Config.course}/courses`)
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
      type: cons.LOAD_TABLES
    });
    fetch(`${Config.apiServer}${Config.course}/${id}`)
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

// export function addTask(data) {
//   return (dispatch) => {
//     dispatch({
//       type: cons.ADD
//     });
//     fetch('http://localhost:3000/task', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then(response => {
//         const status = response.status;

//         if (status !== 200) throw status;

//         dispatch({
//           type: cons.ADD_SUCCESS
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: cons.ADD_FAIL,
//           error: err
//         });
//       });
//   };
// }
