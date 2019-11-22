import {
  GENDERIZE_LOAD_START,
  GENDERIZE_LOAD_SUCCESS,
  GENDERIZE_LOAD_FAILURE
} from '../actions';

export const initialState = {
  person: { name: '', gender: '', probability: 0.0, count: 0 },
  isLoading: false,
  error: '',
  searchName: ''
};

export const genderizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENDERIZE_LOAD_START:
      return {
        ...state,
        isLoading: true
      };

    case GENDERIZE_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        person: action.payload
      };

    case GENDERIZE_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
