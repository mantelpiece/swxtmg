import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import { UpgradeList } from './components/UpgradeList';
import { filterUpgrades, getAllUpgrades, Upgrade } from '../../services/upgradesService';

export class UpgradesPage extends Component {

  initialState() {
    return { searchPhrase: '' };
  }

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState(this.initialState());
  }

  handleChange(event) {
    const searchPhrase = event.target.value;
    this.setState({ searchPhrase: searchPhrase });
  }

  renderSearchBar() {
    return (
      <div className="upgrade-search">
          <form>
            <input type="text"
                   id="upgradeSearchBar"
                   onChange={this.handleChange}
                   placeholder="Search upgrades" />
          </form>
      </div>
    );
  }

  render() {
    return (
      <section>
        <h2>Upgrades</h2>
        {this.renderSearchBar()}
        {this.state.searchPhrase}

        <UpgradeList upgrades={filterUpgrades(this.props.allUpgrades, this.state.searchPhrase)} />
      </section>
    );
  }
}

UpgradesPage.propTypes = {
  allUpgrades: PropTypes.arrayOf(PropTypes.shape(Upgrade))
};

UpgradesPage.defaultProps = {
  allUpgrades: getAllUpgrades()
};
