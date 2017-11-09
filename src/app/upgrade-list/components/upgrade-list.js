import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UpgradeCategoryRow from './upgrade-category-row';
import UpgradeRow from './upgrade-row';
import NoResultsRow from './no-results-row';
import { Upgrade } from '../../services/upgrades';

import './styles.css';

export default class UpgradeList extends Component {

  handleClick() {
    return this.props.selectUpgradeFn();
  }

  render() {
    const rows = [];
    let lastCategory = '';
    this.props.upgrades.forEach((upgrade: Upgrade): void => {
      if (lastCategory !== upgrade.category) {
        rows.push(<UpgradeCategoryRow key={upgrade.category} category={upgrade.category} />);
      }
      rows.push(<UpgradeRow key={upgrade.id} {...upgrade} handleOnClick={this.props.selectUpgradeFn} />);
      lastCategory = upgrade.category;
    });
    if (rows.length === 0) {
      rows.push(<NoResultsRow />);
    }

    return (
      <table className='upgrade-table mdl-data-table mdl-js-data-table'>
        <thead>
          <tr>
            <th className='mdl-data-table__cell--non-numeric upgrade-row-name-cell'>Name</th>
            <th className='upgrade-row-cost-cell'>Cost</th>
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
  upgrades: PropTypes.arrayOf(PropTypes.shape(Upgrade)).isRequired,
  selectUpgradeFn: PropTypes.func.isRequired
};
