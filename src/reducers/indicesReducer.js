import initialState from './initialState';
import { FETCH_INDICES_SUCCESS } from '../actions';

const { indices } = initialState;

export default (state = indices, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_INDICES_SUCCESS: {
      const dates = Object.entries(payload.data);
      const { ticker } = payload;

      const values = [];

      for (let i = 0; i < dates.length; i += 1) {
        if (i === 10) break;

        const key = dates[i][0];
        const value = dates[i][1];
        const timestamp = new Date(key).getTime();

        values.push({ x: timestamp, y: Number(value['4. close']) });
      }
      return { ...state, [ticker]: values };
    }

    default:
      return { ...state };
  }
};
