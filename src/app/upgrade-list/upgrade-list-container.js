import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import UpgradeList from './components/upgrade-list';
import UpgradeCard from './components/upgrade-card/upgrade-card';
import SearchBar from './components/search-bar/search-bar';
import { filterUpgrades, getAllUpgrades, Upgrade } from '../services/upgrades';

export default class UpgradesPage extends Component {

  initialState() {
    return {
      searchParams: {
        searchPhrase: '',
        shownCategories: [],
      },
      shownUpgrades: this.props.allUpgrades,
      selectedUpgrade: null
    };
  }

  constructor() {
    super();

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSelectUpgrade = this.handleSelectUpgrade.bind(this);
  }

  componentWillMount() {
    this.setState(this.initialState());
  }

  handleSearchBarChange(searchParams) {
    const searchPhrase = searchParams.searchPhrase;
    const shownUpgrades = filterUpgrades(this.props.allUpgrades, searchPhrase);
    let selectedUpgrade = this.state.selectedUpgrade;

    if (shownUpgrades.length <= 1) {
      // If only one upgrade matches the search (or none) select that upgrade.
      selectedUpgrade = shownUpgrades[0] || null;
    } else {
      // If multiple upgrades match the search, deselect the existing selection
      // if it does _not_ match.
      if (selectedUpgrade) {
        const selectedUpgradeShown = shownUpgrades.find((shownUpgrade) => {
          return shownUpgrade.id === selectedUpgrade.id;
        });
        selectedUpgrade = selectedUpgradeShown;
      }
    }

    this.setState({ searchParams, selectedUpgrade, shownUpgrades });
  }

  handleSelectUpgrade(id) {
    const card = this.props.allUpgrades.find((card) => {
      return card.id === id;
    });
    this.setState({
      selectedUpgrade: card
    });
  }

  renderCardDetailView() {
    if (!this.state.selectedUpgrade) {
      return;
    }
    return (
      <UpgradeCard card={this.state.selectedUpgrade} closeCardFn={this.handleSelectUpgrade.bind(this, null)}/>
    );
  }

  render() {
    return (
      <section className='mdl-grid'>
        <div className='mdl-cell mdl-cell--12-col'>
          <SearchBar onChange={this.handleSearchBarChange} />
        </div>

        <div className='mdl-cell mdl-cell--6-col'>
          <UpgradeList upgrades={this.state.shownUpgrades}
                       selectUpgradeFn={this.handleSelectUpgrade.bind(this)}/>
        </div>
        <div className='mdl-cell mdl-cell--6-col'>
          {this.renderCardDetailView()}
        </div>
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
