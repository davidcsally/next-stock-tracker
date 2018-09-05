import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PortfolioList from '../../components/PortfolioList/PortfolioList';
import { getPortfolioLevel } from '../../selectors';
import { removeBuy } from '../../actionsCreators';

const PortfolioListContainer = ({ actions, data }) => (
  <PortfolioList data={data} actions={actions} />
);

const mapStateToProps = state => ({
  data: getPortfolioLevel(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeBuy,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioListContainer);
