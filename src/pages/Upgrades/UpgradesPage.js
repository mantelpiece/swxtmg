import React, { Component }  from 'react';

import { UpgradeList } from './components/UpgradeList';
import { getAllUpgrades } from '../../services/upgradesService';

export class UpgradesPage extends Component {
  render() {
    return (
      <section>
        <h2>Upgrades</h2>
        <div className="upgrade-search">
          <form>
            <input type="text"
                   placeholder="Search upgrades"/>
          </form>
        </div>

        <UpgradeList upgrades={getAllUpgrades()}/>
      </section>
    );
  }
}

