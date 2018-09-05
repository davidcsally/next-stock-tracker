import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioListContainer from '../src/containers/PortfolioListContainer/PortfolioListContainer';

class Portfolio extends Component {
  static getInitialProps({ store }) {
    // store.dispatch({
    //   type: 'ADD_BUY',
    //   payload: {
    //     ticker: 'MS',
    //     buy: { purchasePrice: 1000, shares: 1 },
    //   },
    // }); // component will be able to read from store's state when rendered
  }

  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <PortfolioListContainer />
      </div>
    );
  }
}

export default connect()(Portfolio);
