import React from 'react';
import TickerItem from '../TickerItem/TickerItem';
import './PortfolioList.scss';

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
