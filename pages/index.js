import React, { Component } from 'react';
import { connect } from 'react-redux';
import WatchListContainer from '../src/containers/WatchListContainer/WatchListContainer';
import AddStockContainer from '../src/containers/AddStockContainer/AddStockContainer';
import NavigationTab from '../src/components/NavigationTab/NavigationTab';
import './index.scss';
import InputField from '../src/components/InputField/InputField';

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  constructor() {
    super();
    this.state = {
      error: true,
      valid: true,
      filled: true,
    };
  }

  render() {
    return (
      <div styleName="container">
        <InputField
          name="demo"
          errorColor="red"
          successColor="green"
          hoverColor="black"
          valid={this.state.valid}
          error={this.state.error}
          filled={this.state.filled}
        />
      </div>
      // <div styleName="home-container">
      //   <h1>{'David\'s Stock Tracker'}</h1>
      //   <h2>Watch List</h2>
      //   <WatchListContainer />
      //   <AddStockContainer />
      //   <NavigationTab route="/" />
      // </div>
    );
  }
}

export default connect()(Home);
