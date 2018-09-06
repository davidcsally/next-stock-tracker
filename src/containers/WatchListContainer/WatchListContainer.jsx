import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WatchList from '../../components/WatchList/WatchList';
import { fetchData } from '../../actionsCreators';

const WatchListContainer = ({ actions, data }) => (
  <WatchList data={data} fetchData={actions.fetchData} />
);


// TODO - use selector here
const mapStateToProps = state => ({
  data: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchData,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(WatchListContainer);
