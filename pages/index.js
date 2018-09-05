import React, { Component } from 'react';
import { connect } from 'react-redux';
import WatchListContainer from '../src/containers/WatchListContainer/WatchListContainer';
import TextInput from '../src/components/TextInput/TextInput';

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  render() {
    return (
      <div>
        <div>Today</div>
        <WatchListContainer />
        <TextInput />
      </div>
    );
  }
}

export default connect()(Home);
