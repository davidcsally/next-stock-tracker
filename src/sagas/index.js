import { fork } from 'redux-saga/effects';
import { watchStockActions } from './stockSagas';
import { watchIndicesActions } from './indicesSagas';

// combine all sagas
export default function* root() {
  yield fork(watchStockActions);
  yield fork(watchIndicesActions);
}
