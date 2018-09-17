import React from 'react';
import './WatchList.scss';

/** Used in WatchList */
const ListItem = ({ ticker, price, volume, removeStock }) => (
  <li styleName="list-item">
    <p styleName="ticker">{ticker}</p>
    <p styleName="price">{(typeof price === 'undefined' || price === '') ? '---' : Number(price).toFixed(2)}</p>
    <button
      type="button"
      styleName="button-remove"
      onClick={() => removeStock(ticker)}
    >
      <span role="img" aria-label="remove">🚫</span>
    </button>
  </li>
);


/**
 * Show list of watched stocks.
 * Used in WatchListContainer
 */
const WatchList = ({ actions, data }) => (
  <div styleName="container">
    <button type="button" styleName="std-button" onClick={actions.fetchData}>
      Fetch Data
    </button>
    <ol styleName="list">
      {data.map(d => (
        <ListItem
          ticker={d.ticker}
          price={d.price}
          volume={d.volume}
          removeStock={actions.removeStock}
          key={d.ticker}
        />
      ))}
    </ol>
  </div>
);

export default WatchList;
