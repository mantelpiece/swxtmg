import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UpgradeRow extends Component {
  render() {
    return (
      <tr><td>{this.props.name}</td><td>{this.props.cost}</td></tr> 
    );
  }
}

UpgradeRow.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};
