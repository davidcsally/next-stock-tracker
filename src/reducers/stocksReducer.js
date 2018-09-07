import { FETCH_DATA } from '../actions';
import initialState from './initialState';

const { stocks } = initialState;

export default (state = stocks, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_DATA}_SUCCESS`:
      return payload.reduce((prev, cur) => ({
        ...prev,
        [cur['1. symbol']]: {
          price: cur['2. price'],
          volume: cur['3. volume'],
          timestamp: cur['4. timestamp'],
        },
      }), {});

    case `${FETCH_DATA}_FAILURE`:
      return state;

    default:
      return state;
  }
};