import React, { Component } from 'react';

import Header from './core/header/header';
import Footer from './core/footer/footer';
import UpgradesListContainer from './upgrade-list/upgrade-list-container';

export default class Swxtmg extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <main className="mdl-layout-content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              <UpgradesListContainer />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
