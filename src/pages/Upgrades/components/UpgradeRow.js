import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UpgradeRow extends Component {
  render() {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric upgrade-row-name-cell">{this.props.name}</td>
        <td className="upgrade-row-cost-cell">{this.props.cost}</td>
      </tr>
    );
  }
}

UpgradeRow.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};
