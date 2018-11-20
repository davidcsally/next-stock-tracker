import { createSelector } from 'reselect';

const getTopLevel = key => state => state[key];

// grab top level keys from state
export const getStocks = getTopLevel('stocks');
export const getPortfolio = getTopLevel('portfolio');
export const getWatched = getTopLevel('watched');
export const getUi = getTopLevel('ui');
export const getIndiceLevel = getTopLevel('indices');

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

export const getIndices = createSelector(
  [getIndiceLevel],
  indices => Object.keys(indices),
);

export const getPortfolioLevel = createSelector(
  [getPortfolio],
  portfolio => portfolio,
);

export const getDisplayType = createSelector(
  [getUi],
  ui => ui.displayType,
);

/**
 * What the $%&^ is this!?
 *
 * Basically, we want to go through the portfolio stock tickers, and merge
 * the price from stocks into every buy
 */
export const getPortfolioData = createSelector(
  [getStocks, getPortfolio],
  (stocks, portfolio) => Object.keys(portfolio)
    .reduce((previous, ticker) => ({
      ...previous,
      [ticker]: portfolio[ticker]
        .map(buy => ({
          ...buy,
          price: stocks[ticker].price,
        })),
    }), {}),
);
