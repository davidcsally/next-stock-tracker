import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationTab from '../src/components/NavigationTab/NavigationTab';
import PortfolioListContainer from '../src/containers/PortfolioListContainer/PortfolioListContainer';
import './index.scss';
import InputField from '../src/components/InputField/InputField';

class Portfolio extends Component {
  static getInitialProps({ store }) { }

  render() {
    return (
      <div>
        playground
        <InputField />
        {/* <div styleName="home-container">
          <h1>{'David\'s Stock Tracker'}</h1>
          <h2>Portfolio</h2>
          <PortfolioListContainer />
          <NavigationTab route="/portfolio" />
        </div> */}
      </div>
    );
  }
}

export default connect()(Portfolio);
