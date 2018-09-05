import watched from './watchedReducer';
import portfolio from './portfolioReducer';

const reducers = {
  stocks: watched,
  portfolio,
};

export default reducers;
