import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UpgradeCategoryRow } from './UpgradeCategoryRow';
import { UpgradeRow } from './UpgradeRow';
import { Upgrade } from '../../../services/upgradesService';

export class UpgradeList extends Component {

  render() {
    const rows = [];
    let lastCategory = '';
    this.props.upgrades.forEach((upgrade: Upgrade): void => {
      if (lastCategory !== upgrade.category) {
        rows.push(<UpgradeCategoryRow key={upgrade.category} category={upgrade.category} />);
      }
      rows.push(<UpgradeRow key={upgrade.name} {...upgrade} />);
      lastCategory = upgrade.category;
    });

    return (
      <table className='swx-upgrade-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

UpgradeList.propTypes = {
  upgrades: PropTypes.arrayOf(PropTypes.shape(Upgrade)).isRequired
};
