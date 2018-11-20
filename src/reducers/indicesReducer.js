import initialState from './initialState';
import { FETCH_INDICES_SUCCESS } from '../actions';

const { indices } = initialState;

const MSEC_DAILY = 86400000;

export default (state = indices, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_INDICES_SUCCESS: {
      const dates = Object.entries(payload.data);
      const { ticker } = payload;

      console.log('dates', dates);

      const values = dates.map((element, i) => {
        const key = element[0];
        const value = element[1];
        const timestamp = new Date(key).getTime();

        console.log('time? ', timestamp);

        console.log('value: ', value);
        return { x: timestamp + MSEC_DAILY * i, y: Number(element[1]['4. close']) };
        // return element[1]['4. close'];
      });

      console.log('values? ', values);
      return { ...state, [ticker]: values };
    }

    default:
      return { ...state };
  }
};
