import { fork } from 'redux-saga/effects';
import { watchStockActions } from './stockActions';

// combine all sagas
export default function* root() {
  yield fork(watchStockActions);
}
