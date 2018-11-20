import React from 'react';
import TickerItem from '../TickerItem/TickerItem';
import './PortfolioList.scss';

const currencyFormatter = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(value);
};

/**
 * show list of watched stocks
 *
 * Used in PortfolioListContainer
 */
const PortfolioList = ({ data, actions, totalValue }) => {
  return (
    <div styleName="container">
      <h2>Your Portfolio</h2>
      <h1>{currencyFormatter(totalValue)}</h1>
      <button
        type="button"
        styleName="std-button"
        onClick={actions.fetchData}
      >
        Fetch Data
      </button>
      <ol styleName="parent-list">
        <p styleName="selector">%holdings</p>
        {data && Object.keys(data).map(t => (
          <TickerItem
            key={t}
            ticker={t}
            buys={data[t]}
            actions={actions}
            portfolioValue={totalValue}
          />
        ))}
      </ol>
    </div>
  );
};

export default PortfolioList;
