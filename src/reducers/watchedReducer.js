import { FETCH_DATA, ADD_STOCK_SUCCESS, REMOVE_STOCK } from '../actions';
import initialState from './initialState';

const { stocks } = initialState;

export default (state = stocks, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_DATA}_SUCCESS`:
      // map through list and extract data
      return payload.map(stock => ({
        ticker: stock['1. symbol'],
        price: stock['2. price'],
        volume: stock['3. volume'],
        timestamp: stock['4. timestamp'],
      }));

    case `${FETCH_DATA}_FAILURE`:
      return state;

    case ADD_STOCK_SUCCESS: {
      const newStock = { ticker: payload };
      return state.concat(newStock);
    }

    case REMOVE_STOCK: {
      return state.filter(s => s.ticker !== payload);
    }

    default:
      return state;
  }
};
