import { FETCH_DATA } from '../actions';
import initialState from './initialState';

const { stocks } = initialState;

export default (state = stocks, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_DATA}_SUCCESS`:
      return payload.map(stock => ({
        symbol: stock['1. symbol'],
        price: stock['2. price'],
        volume: stock['3. volume'],
        timestamp: stock['4. timestamp'],
      }));

    case `${FETCH_DATA}_FAILURE`:
      return state;

    default:
      return state;
  }
};
