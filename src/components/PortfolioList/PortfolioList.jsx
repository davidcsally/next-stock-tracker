import React from 'react';
import './PortfolioList.scss';

const TickerItem = ({ ticker, buys, actions }) => {
  const totalShares = buys.reduce((prev, current) => prev + current.shares, 0);
  const totalValue = buys.reduce((prev, current) => prev + current.price, 0);
  return (
    <li styleName="ticker-item">
      <div styleName="ticker">
        <p styleName="ticker">{ticker}</p>
        <p>total shares: {totalShares}</p>
        <p styleName="col-value">${Number(totalValue).toFixed(2)}</p>
      </div>
      <ol styleName="buys-list">
        {buys.map((t, i) => (
          <ListItem
            actions={actions}
            key={t.shares + t.purchasePrice}
            purchasePrice={t.purchasePrice}
            shares={t.shares}
            index={i}
            ticker={ticker}
          />
        ))}
        <li styleName="cell-add-trade">
          add trade
        </li>
      </ol>
    </li>
  );
};

const ListItem = ({ purchasePrice, shares, actions, index, ticker }) => (
  <li styleName="list-item">
    <p>purchase price: {purchasePrice}</p>
    <p>shares: {shares}</p>
    <button
      styleName="button-remove"
      type="button"
      onClick={() => actions.removeBuy({ ticker, index })}
    >
      <span role="img" aria-label="remove">🚫</span>
    </button>
  </li>
);

/**
 * show list of watched stocks
 *
 * Used in PortfolioListContainer
 */
const PortfolioList = ({ data, actions }) => (
  <div styleName="container">
    <button styleName="std-button" onClick={actions.fetchData}>
      Fetch Data
    </button>
    <ol styleName="parent-list">
      {data && Object.keys(data).map(t => (
        <TickerItem
          key={t}
          ticker={t}
          buys={data[t]}
          actions={actions}
        />
      ))}
    </ol>
  </div>
);

export default PortfolioList;
