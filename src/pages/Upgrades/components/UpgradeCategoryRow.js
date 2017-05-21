import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UpgradeCategoryRow extends Component {
  render() {
    return (
      <tr><th colSpan="2">{this.props.category}</th></tr> 
    );
  }
}

UpgradeCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
};
