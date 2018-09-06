import React from 'react';
import './WatchList.scss';

// function generateList(data) {
  
// }

// list
const ListItem = ({ ticker, price, volume }) => (
  <li styleName="list-item">
    <p styleName="ticker">{ticker}</p>
    <p styleName="price">{price}</p>
  </li>
);


// show list of watched stocks
const WatchList = ({ fetchData, data }) => {
  // console.log('data', data);
  return (
    <div styleName="container">
      <button type="button" styleName="std-button" onClick={fetchData}>
        Fetch data
      </button>
      <ol styleName="list">
        {data.map(d => <ListItem ticker={d.ticker} price={d.price} volume={d.volume} key={d.ticker} />)}
      </ol>
    </div>
  );
};

export default WatchList;
