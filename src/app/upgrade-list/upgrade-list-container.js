import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import UpgradeList from './components/upgrade-list';
import UpgradeCard from './components/upgrade-card/upgrade-card';
import SearchBar from './components/search-bar/search-bar';
import { filterUpgrades, getAllUpgrades, Upgrade } from '../services/upgrades';

export default class UpgradesPage extends Component {

  initialState() {
    return {
      searchPhrase: '',
      shownCategories: [],
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
    this.setState({ searchParams });

    const searchPhrase = searchParams.searchPhrase;
    const currentlySelectedUpgrade = this.state.selectedUpgrade;

    if (currentlySelectedUpgrade) {
      // If something is selected, de-select it if doesn't match.
      if (filterUpgrades([ this.state.selectedUpgrade ], searchPhrase).length === 0) {
        this.handleSelectUpgrade(null);
      }
    } else {
      // If nothing is selected, and there is only one match select it.
      const filteredUpgrades = filterUpgrades(this.props.allUpgrades, searchPhrase);
      if (filteredUpgrades.length === 1) {
        this.handleSelectUpgrade(filteredUpgrades[0].id);
      }
    }
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

        <div className='mdl-cell--6-col'>
          <UpgradeList upgrades={filterUpgrades(this.props.allUpgrades, this.state.searchPhrase)}
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
