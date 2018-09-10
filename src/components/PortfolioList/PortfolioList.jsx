import React from 'react';
import './PortfolioList.scss';

const TickerItem = ({ ticker, buys, actions }) => (
  <li styleName="ticker-item">
    <p styleName="ticker">{ticker}</p>
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
    </ol>
  </li>
);

const ListItem = ({ purchasePrice, shares, actions, index, ticker }) => (
  <li styleName="list-item">
    <p>price: {purchasePrice}</p>
    <p>shares: {shares}</p>
    <button onClick={() => actions.removeBuy({ ticker, index })}>remove</button>
  </li>
);

/**
 * show list of watched stocks
 *
 * Used in PortfolioListContainer
 */
const PortfolioList = ({ fetchData, data, actions }) => (
  <div styleName="container">
    <button onClick={fetchData}>
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
