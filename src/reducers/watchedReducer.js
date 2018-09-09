import { ADD_STOCK_SUCCESS, REMOVE_STOCK } from '../actions';
import initialState from './initialState';

const { watched } = initialState;

export default (state = watched, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_STOCK_SUCCESS: {
      return { ...state, [payload]: true };
    }

    case REMOVE_STOCK: {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    }

    default:
      return state;
  }
};
