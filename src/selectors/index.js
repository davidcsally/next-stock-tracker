import { createSelector } from 'reselect';

const getTopLevel = key => state => state[key];

export const getStocks = getTopLevel('stocks');

export const getStocksField = createSelector(
  getStocks,
  stocks => stocks,
);

export const getStockTickers = createSelector(
  [getStocks],
  stocks => stocks.map(({ ticker }) => ticker),
);
