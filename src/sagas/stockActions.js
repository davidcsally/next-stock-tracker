/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_DATA, ADD_STOCK } from '../actions';
import {
  fetchDataSuccess, fetchDataFailure, addStockSuccess, addStockFailure,
} from '../actionsCreators';
import { updateList } from '../api';

import { getStockTickers } from '../selectors';

/** Trigger a call to api to refresh data */
function* fetchDataCall() {
  // grab list of tickers from state
  const tickers = yield select(getStockTickers);

  // call api
  const { data } = yield call(updateList, tickers);
  const stockQuotes = data['Stock Quotes'];

  // dispatch success / failure
  if (!stockQuotes) yield put(fetchDataFailure());
  else yield put(fetchDataSuccess(stockQuotes));
}

/** When a stock is added, validate that it is new and a legit ticker.
 * If so, add to payload and refresh all data. Otherwise abort
 */
function* addNewStock(action) {
  const { payload } = action;
  // TODO validate here
  const currentState = yield select(getStockTickers);

  if (currentState.includes(payload)) {
    yield put(addStockFailure());
  } else {
    yield put(addStockSuccess(payload));
    yield call(fetchDataCall);
  }
}

// listen for actions 👂
export function* watchStockActions() {
  yield all([
    takeEvery(FETCH_DATA, fetchDataCall),
    takeEvery(ADD_STOCK, addNewStock),
  ]);
}
