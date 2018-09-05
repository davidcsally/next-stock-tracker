import { ADD_BUY, REMOVE_BUY } from '../actions';
import initialState from './initialState';

const { portfolio } = initialState;

export default (state = portfolio, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_BUY: {
      // if param exists, add to state, else create new key
      if (state[payload.ticker]) {
        return { ...state, ...state[payload.ticker].push(payload.buy) };
      }
      return { ...state, [payload.ticker]: [payload.buy] };
    }
    case REMOVE_BUY:
      return {
        ...state,
        [payload.ticker]: state[payload.ticker].filter((el, i) => i !== payload.index),
      };

    default:
      return state;
  }
};
