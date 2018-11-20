import ui from './uiReducer';
import indices from './indicesReducer';
import stocks from './stocksReducer';
import watched from './watchedReducer';
import portfolio from './portfolioReducer';

const reducers = {
  ui,
  stocks,
  indices,
  watched,
  portfolio,
};

export default reducers;
