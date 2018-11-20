import {
  ADD_STOCK,
  REMOVE_STOCK,
  ADD_STOCK_SUCCESS,
  ADD_STOCK_FAILURE,
  FETCH_DATA,
  ADD_BUY,
  REMOVE_BUY,
  ADD_NEW_STOCK,
  FETCH_INDICES_SUCCESS,
  FETCH_INDICES_FAILURE,
} from '../actions';

export const addNewStock = payload => ({
  payload,
  type: ADD_NEW_STOCK,
});

export const addBuy = payload => ({
  payload,
  type: ADD_BUY,
});

export const removeBuy = payload => ({
  payload,
  type: REMOVE_BUY,
});

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

export const removeStock = payload => ({
  payload,
  type: REMOVE_STOCK,
});

// indices
export const fetchIndicesSuccess = payload => ({
  payload,
  type: FETCH_INDICES_SUCCESS,
});

export const fetchIndicesFailure = () => ({
  type: FETCH_INDICES_FAILURE,
});
