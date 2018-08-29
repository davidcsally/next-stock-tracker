import React, { Component } from 'react';
import { connect } from 'react-redux';
import WatchListContainer from '../src/containers/WatchListContainer/WatchListContainer';
import TextInput from '../src/components/TextInput/TextInput';

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    // store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
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
