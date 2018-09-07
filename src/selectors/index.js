import { createSelector } from 'reselect';

const getTopLevel = key => state => state[key];

// grab top level keys from state
export const getStocks = getTopLevel('stocks');
export const getPortfolio = getTopLevel('portfolio');
export const getWatched = getTopLevel('watched');

// process the data
export const getWatchedLevel = createSelector(
  [getWatched, getStocks],
  (watched, stocks) => Object.keys(watched).map(t => ({
    ticker: t,
    price: stocks[t].price,
    volume: stocks[t].volume,
  })),
);

export const getStocksLevel = createSelector(
  [getStocks],
  stocks => stocks,
);

export const getStockTickers = createSelector(
  [getStocks],
  stocks => Object.keys(stocks),
);

export const getPortfolioLevel = createSelector(
  [getPortfolio],
  portfolio => portfolio,
);
