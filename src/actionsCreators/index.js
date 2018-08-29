import {
  ADD_STOCK,
  ADD_STOCK_SUCCESS,
  ADD_STOCK_FAILURE,
  FETCH_DATA,
} from '../actions';

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = payload => ({
  payload,
  type: `${FETCH_DATA}_SUCCESS`,
});

export const fetchDataFailure = () => ({
  type: `${FETCH_DATA}_FAILURE`,
});

export const addStock = payload => ({
  payload,
  type: ADD_STOCK,
});

export const addStockSuccess = payload => ({
  payload,
  type: ADD_STOCK_SUCCESS,
});

export const addStockFailure = payload => ({
  payload,
  type: ADD_STOCK_FAILURE,
});
