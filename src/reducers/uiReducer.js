import { CYCLE_DISPLAY_TYPE } from '../actions';
import initialState from './initialState';

const { ui } = initialState;

export default (state = ui, action) => {
  const { type, payload } = action;

  switch (type) {
    case CYCLE_DISPLAY_TYPE: {
      const { displayType } = payload;
      return { ...state, displayType };
    }

    default:
      return { ...state };
  }
};
