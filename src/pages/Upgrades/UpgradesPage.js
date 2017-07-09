import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import { UpgradeList } from './components/UpgradeList';
import { UpgradeCard } from './components/UpgradeCard/UpgradeCard';
import { filterUpgrades, getAllUpgrades, Upgrade } from '../../services/upgradesService';

export class UpgradesPage extends Component {

  initialState() {
    return {
      searchPhrase: '',
      selectedUpgrade: undefined
    };
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

  handleSelectUpgrade(id) {
    const card = this.props.allUpgrades.find((card) => {
      return card.id === id;
    });
    this.setState({
      selectedUpgrade: card
    });
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

  renderCardDetailView() {
    if (!this.state.selectedUpgrade) {
      return;
    }
    return (
      <UpgradeCard card={this.state.selectedUpgrade}/>
    );
  }

  render() {
    return (
      <section>
        <h2>Upgrades</h2>
        {this.renderSearchBar()}

        <UpgradeList upgrades={filterUpgrades(this.props.allUpgrades, this.state.searchPhrase)}
                     selectUpgradeFn={this.handleSelectUpgrade.bind(this)}/>

        {this.renderCardDetailView()}
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
