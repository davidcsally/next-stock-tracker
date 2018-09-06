import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextInput from '../../components/TextInput/TextInput';
import { addStock } from '../../actionsCreators';

const AddStockContainer = ({ actions }) => (
  <TextInput placeholder="Add a Stock" onSubmit={actions.addStock} />
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addStock,
  }, dispatch),
});


export default connect(null, mapDispatchToProps)(AddStockContainer);
