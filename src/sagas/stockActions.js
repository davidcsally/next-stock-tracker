/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_DATA } from '../actions';
import {
  fetchDataSuccess, fetchDataFailure,
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

// listen for actions 👂
export function* watchStockActions() {
  yield all([
    takeEvery(FETCH_DATA, fetchDataCall),
  ]);
}
