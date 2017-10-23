import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-layout--fixed-header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">SWX-TMG</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="#">Ships</a>
            <a className="mdl-navigation__link" href="#">Upgrades</a>
            <a className="mdl-navigation__link" href="#">Collection</a>
            <a className="mdl-navigation__link" href="#">Squads</a>
          </nav>
        </div>
      </header>
    );
  }
}
