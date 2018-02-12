import {
  RECEIVE_TOP_RECIPES_SUCCESS,
  RECEIVE_TOP_RECIPES_FAILURE,
  RECEIVE_SEARCH_RESULTS_SUCCESS,
  RECEIVE_SEARCH_RESULTS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  recipes: [],
  error: null,
  metadata: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TOP_RECIPES_SUCCESS:
    case RECEIVE_SEARCH_RESULTS_SUCCESS:
      return Object.assign({}, state, {
        recipes: action.payload.recipes,
        metadata: action.payload.metadata
      });
    case RECEIVE_TOP_RECIPES_FAILURE:
    case RECEIVE_SEARCH_RESULTS_FAILURE:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
