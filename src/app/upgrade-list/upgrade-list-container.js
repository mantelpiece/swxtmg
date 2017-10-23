import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import UpgradeList from './components/upgrade-list';
import UpgradeCard from './components/upgrade-card/upgrade-card';
import { filterUpgrades, getAllUpgrades, Upgrade } from '../services/upgrades';

export default class UpgradesPage extends Component {

  initialState() {
    return {
      searchPhrase: '',
      selectedUpgrade: null
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
    if (this.state.selectedUpgrade) {
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

  renderSearchBar() {
    return (
      <div className="upgrade-search">
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   id="upgradeSearchBar"
                   onChange={this.handleChange}
                   placeholder="Search..." />
          </div>
        </form>
      </div>
    );
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
          <h2>Upgrades</h2>
          {this.renderSearchBar()}
        </div>

        <div className='mdl-cell mdl-cell--6-col'>
          <UpgradeList upgrades={filterUpgrades(this.props.allUpgrades, this.state.searchPhrase)}
                       selectUpgradeFn={this.handleSelectUpgrade.bind(this)}/>
        </div>
        <div className='mdl-cell'>
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
