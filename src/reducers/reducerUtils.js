/* eslint-disable import/prefer-default-export */

/** Remove a stock from the portfolio field, and delete the field if all entries are removed */
export const removeHelper = (state, payload) => {
  const newState = {
    ...state,
    [payload.ticker]: state[payload.ticker].filter((el, i) => i !== payload.index),
  };
  if (newState[payload.ticker].length === 0) {
    delete newState[payload.ticker];
  }
  return newState;
};
