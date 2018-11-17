import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PortfolioList from '../../components/PortfolioList/PortfolioList';

import { getPortfolioData, getDisplayType } from '../../selectors';
import { removeBuy, fetchData } from '../../actionsCreators';

const PortfolioListContainer = ({ actions, data }) => (
  <PortfolioList data={data} actions={actions} />
);

const mapStateToProps = state => ({
  data: getPortfolioData(state),
  displayType: getDisplayType,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeBuy,
    fetchData,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioListContainer);
