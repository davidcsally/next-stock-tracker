import React, { Component } from 'react';
import { connect } from 'react-redux';
import WatchListContainer from '../src/containers/WatchListContainer/WatchListContainer';
import AddStockContainer from '../src/containers/AddStockContainer/AddStockContainer';
import './index.scss';

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  render() {
    return (
      <div styleName="home-container">
        <h1>David's Stock Tracker</h1>
        <WatchListContainer />
        <AddStockContainer />
      </div>
    );
  }
}

export default connect()(Home);
