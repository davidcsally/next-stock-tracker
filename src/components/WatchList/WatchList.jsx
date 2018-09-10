import React from 'react';
import './WatchList.scss';

// list
const ListItem = ({ ticker, price, volume, removeStock }) => (
  <li styleName="list-item">
    <p styleName="ticker">{ticker}</p>
    <p styleName="price">{(typeof price === 'undefined' || price === '') ? '---' : Number(price).toFixed(2)}</p>
    <button
      type="button"
      onClick={() => removeStock(ticker)}
    >
      <span role="img" aria-label="remove">🚫</span>
    </button>
  </li>
);


// show list of watched stocks
const WatchList = ({ actions, data }) => (
  <div styleName="container">
    <button type="button" styleName="std-button" onClick={actions.fetchData}>
      Fetch data
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
