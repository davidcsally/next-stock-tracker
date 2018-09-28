import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import './TickerItem.scss';

/** Used in TickerItem */
const ListItem = ({ purchasePrice, shares, actions, index, ticker }) => (
  <li styleName="list-item">
    <p>purchase price: {purchasePrice}</p>
    <p>shares: {shares}</p>
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
};

/** Used in PortfolioList */
class TickerItem extends Component {
  constructor() {
    super();
    this.state = { isModalOpen: false };
  }

  toggleTradesModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { buys, ticker, actions } = this.props;

    // calculate the totals for price and shares
    const totalShares = buys.reduce((prev, current) => prev + current.shares, 0);
    const totalValue = buys.reduce((prev, current) => prev + (current.price * current.shares), 0);

    return (
      <li styleName="ticker-item">
        <div styleName="ticker">
          <p styleName="ticker">{ticker}</p>
          <p>total shares: {totalShares}</p>
          <p styleName="col-value">${Number(totalValue).toFixed(2)}</p>
        </div>
        <ol styleName="buys-list">
          {buys.map((t, i) => (
            <ListItem
              actions={actions}
              key={t.shares + t.purchasePrice}
              purchasePrice={t.purchasePrice}
              shares={t.shares}
              index={i}
              ticker={ticker}
            />
          ))}
          <li styleName="cell-add-trade">
            <button
              type="button"
              onClick={this.toggleTradesModal}
            >
              Add trade
            </button>
            {this.state.isModalOpen &&
              <Modal onCloseRequest={this.toggleTradesModal}>
                <AddTradesModal />
              </Modal>
            }
          </li>
        </ol>
      </li>
    );
  }
}

const AddTradesModal = () => (
  <div styleName="container">
    <p>what up hello</p>
    <div styleName="row-container">
      <p>Ticker</p>
      <input type="text" />
    </div>
    <div styleName="row-container">
      <p>Shares</p>
      <input type="text" />
    </div>
    <div styleName="row-container">
      <p>Purchase Price</p>
      <input type="text" />
    </div>
  </div>
);

export default TickerItem;
