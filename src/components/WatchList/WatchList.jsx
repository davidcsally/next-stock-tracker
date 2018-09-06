import React from 'react';
import './WatchList.scss';

// function generateList(data) {

// }

// list
const ListItem = ({ ticker, price, volume, removeStock }) => (
  <li styleName="list-item">
    <p styleName="ticker">{ticker}</p>
    <p styleName="price">{price}</p>
    <button
      type="button"
      onClick={() => removeStock(ticker)}
    >
      <span role="img" aria-label="remove">🚫</span>
    </button>
  </li>
);


// show list of watched stocks
const WatchList = ({ actions, data }) => {
  // console.log('data', data);
  return (
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
};

export default WatchList;
