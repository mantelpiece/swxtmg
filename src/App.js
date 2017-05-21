import React, { Component } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { UpgradesPage } from './pages/Upgrades/UpgradesPage';

export class App extends Component {
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
              <UpgradesPage />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
