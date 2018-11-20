import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WatchList from '../../components/WatchList/WatchList';
import { fetchData, removeStock } from '../../actionsCreators';
import { getWatchedLevel, getIndiceLevel } from '../../selectors';

const WatchListContainer = ({ actions, data, indices }) => (
  <WatchList data={data} actions={actions} indices={indices} />
);

const mapStateToProps = state => ({
  data: getWatchedLevel(state),
  indices: getIndiceLevel(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchData,
    removeStock,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListContainer);
