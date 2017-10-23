import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UpgradeCategoryRow extends Component {
  render() {
    return (
      <tr><th className='mdl-data-table__cell--non-numeric' colSpan="2">{this.props.category}</th></tr>
    );
  }
}

UpgradeCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
};
