/* eslint-disable import/prefer-default-export */
import { all, call, put, takeEvery, select } from 'redux-saga/effects';

import { FETCH_DATA } from '../actions';
import { getIndices } from '../selectors';
import { fetchIndex } from '../api';
import { fetchIndicesFailure, fetchIndicesSuccess } from '../actionsCreators';

function* fetchIndicesCall() {
  // select data from state
  const indices = yield select(getIndices);

  console.log('indices', indices);
  // call api
  const { data } = yield call(fetchIndex, indices[0]);

  // unwrap data
  const indexData = data['Time Series (Daily)'];
  console.log('index data: ', indexData);

  // dispatch success / failure
  if (!indexData) yield put(fetchIndicesFailure());
  else yield put(fetchIndicesSuccess({ ticker: 'DJI', data: indexData }));
}

// listen for actions 👂
export function* watchIndicesActions() {
  yield all([
    takeEvery(FETCH_DATA, fetchIndicesCall),
  ]);
}
