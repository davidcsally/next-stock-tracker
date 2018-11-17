import { FETCH_DATA, ADD_STOCK_SUCCESS } from '../actions';
import initialState from './initialState';

const { stocks } = initialState;

export default (state = stocks, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_STOCK_SUCCESS:
      return { ...state, [payload]: { price: '', volume: '', timestamp: '' } };

    case `${FETCH_DATA}_SUCCESS`:
      return payload.reduce((prev, cur) => ({
        ...prev,
        [cur['1. symbol']]: {
          price: Number(cur['2. price']),
          volume: Number(cur['3. volume']),
          timestamp: Number(cur['4. timestamp']),
        },
      }), {});

    case `${FETCH_DATA}_FAILURE`:
      return state;

    default:
      return state;
  }
};
