import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import ListItem from '../ListItem/ListItem';
import './TickerItem.scss';

/** Used in PortfolioList */
class TickerItem extends Component {
  static propTypes = {
    buys: PropTypes.array,
    ticker: PropTypes.string,
    actions: PropTypes.any,
  };

  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      isListShown: true,
    };
  }

  toggleTradesModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  toggleList = () => {
    const { isListShown } = this.state;
    this.setState({ isListShown: !isListShown });
  }

  render() {
    const { buys, ticker, actions } = this.props;
    const { isModalOpen, isListShown } = this.state;

    // calculate the totals for price and shares
    const totalShares = buys.reduce((prev, current) => prev + current.shares, 0);
    const totalValue = buys.reduce((prev, current) => prev + (current.price * current.shares), 0);

    return (
      <li styleName="ticker-item">
        <div styleName="ticker" onClick={this.toggleList} role="button" tabIndex="0">
          <p>{ticker}</p>
          <p>shares: {totalShares}</p>
          <p styleName="col-value">${Number(totalValue).toFixed(2)}</p>
        </div>
        {isListShown && (
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
              {isModalOpen && (
                <Modal onCloseRequest={this.toggleTradesModal}>
                  <AddTradesModal />
                </Modal>)
              }
            </li>
          </ol>)
        }
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
