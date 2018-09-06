import { createSelector } from 'reselect';

const getTopLevel = key => state => state[key];

export const getStocks = getTopLevel('stocks');
export const getPortfolio = getTopLevel('portfolio');

export const getStocksLevel = createSelector(
  [getStocks],
  stocks => stocks,
);

export const getStockTickers = createSelector(
  [getStocks],
  stocks => stocks.map(({ ticker }) => ticker),
);

export const getPortfolioLevel = createSelector(
  [getPortfolio],
  portfolio => portfolio,
);
