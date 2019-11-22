import axios from 'axios';

export const GENDERIZE_LOAD_START = 'GENDERIZE_LOAD_START';
export const GENDERIZE_LOAD_SUCCESS = 'GENDERIZE_LOAD_SUCCESS';
export const GENDERIZE_LOAD_FAILURE = 'GENDERIZE_LOAD_FAILURE';

export const getGenderData = name => dispatch => {
  //https://api.genderize.io?name=peter

  dispatch({ type: GENDERIZE_LOAD_START });

  axios
    .get('https://api.genderize.io?name=' + name)

    .then(res => {
      console.log('this is seach' + name);
      console.log(res);
      dispatch({
        type: GENDERIZE_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GENDERIZE_LOAD_FAILURE,
        dispatch: 'error loading data'
      });
    });
};
