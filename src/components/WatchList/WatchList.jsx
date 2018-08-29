import React from 'react';
import './WatchList.scss';

const ListItem = ({ ticker, price, volume }) => (
  <li>
    <p>Ticker: {ticker}</p>
    <p>Price: {price}</p>
    <p>Volume: {volume}</p>
  </li>
);


// show list of watched stocks
const WatchList = ({ fetchData, data }) => {
  // console.log('data', data);
  return (
    <div styleName="container">
      <button onClick={fetchData}>
        Add A stock
      </button>
      <ol>
        {data.map(d => <ListItem ticker={d.ticker} price={d.price} volume={d.volume} key={d.ticker} />)}
      </ol>
    </div>
  );
};

export default WatchList;
