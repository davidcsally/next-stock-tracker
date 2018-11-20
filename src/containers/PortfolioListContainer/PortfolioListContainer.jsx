import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PortfolioList from '../../components/PortfolioList/PortfolioList';

import { getPortfolioData, getDisplayType, totalPortfolioValue } from '../../selectors';
import { removeBuy, fetchData } from '../../actionsCreators';

const PortfolioListContainer = ({ actions, data, totalValue }) => (
  <PortfolioList data={data} actions={actions} totalValue={totalValue} />
);

const mapStateToProps = state => ({
  data: getPortfolioData(state),
  displayType: getDisplayType(state),
  totalValue: totalPortfolioValue(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeBuy,
    fetchData,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioListContainer);
