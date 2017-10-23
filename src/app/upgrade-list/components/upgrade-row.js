import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UpgradeRow extends Component {
  render() {
    return (
      <tr onClick={this.props.handleOnClick.bind(null, this.props.id)}>
        <td className="mdl-data-table__cell--non-numeric upgrade-row-name-cell">{this.props.name}</td>
        <td className="upgrade-row-cost-cell">{this.props.cost}</td>
      </tr>
    );
  }
}

UpgradeRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired
};
