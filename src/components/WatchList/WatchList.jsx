import React from 'react';

import StocksGraph from '../StocksGraph/StocksGraph';
import WatchListItem from '../WatchListItem/WatchListItem';

import './WatchList.scss';

/**
 * Show list of watched stocks.
 * Used in WatchListContainer
 */
const WatchList = ({ actions, data, indices }) => (
  <div styleName="container">
    <button type="button" styleName="std-button" onClick={actions.fetchData}>
      Fetch Data
    </button>
    <StocksGraph data={indices.DJI} />
    <ol styleName="list">
      {data.map(d => (
        <WatchListItem
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
