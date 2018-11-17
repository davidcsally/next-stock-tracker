import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';

/** Used in TickerItem */
const ListItem = ({
  purchasePrice,
  shares,
  actions,
  index,
  ticker,
}) => (
  <li styleName="list-item">
    <p styleName="text">price: {purchasePrice}</p>
    <p styleName="text">shares: {shares}</p>
    <p styleName="text">shares: {shares}</p>
    <button
      styleName="button-remove"
      type="button"
      onClick={() => actions.removeBuy({ ticker, index })}
    >
      <span role="img" aria-label="remove">🚫</span>
    </button>
  </li>
);

ListItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  purchasePrice: PropTypes.number.isRequired,
  actions: PropTypes.objectOf({
    removeBuy: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListItem;
