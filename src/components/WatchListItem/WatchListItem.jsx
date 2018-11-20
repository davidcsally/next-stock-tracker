import React from 'react';
import './WatchListItem.scss';

/** Used in WatchList */
const WatchListItem = ({ ticker, price, volume, removeStock }) => (
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

export default WatchListItem;
