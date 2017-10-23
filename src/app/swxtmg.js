import React from 'react';

import Header from './core/header/header';
import Footer from './core/footer/footer';
import UpgradeListContainer from './upgrade-list/upgrade-list-container';
import ShipListContainer from './ship-list/ship-list-container';

export default class Swxtmg extends React.Component {
  constructor() {
    super();

    this.state = { page: 'upgrades' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const page = event.target.id.replace('nav_', '');
    this.setState({ page });
  }

  renderPage() {
    switch (this.state.page) {
    case 'upgrades': return (<UpgradeListContainer />);
    case 'ships': return (<ShipListContainer />);
    default:
      return (<div>Hows about a nice cup of 404 <br /> Could not find page "{this.state.page}"</div>);
    }
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header active={this.state.page} onNavigate={this.handleChange} />
        <main className="mdl-layout-content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              {this.renderPage()}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
