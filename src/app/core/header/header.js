import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const pageNames = [ 'Ships', 'Upgrades', 'Collection', 'Squads' ];

export default class Header extends React.Component {
  constructor() {
    super();
  }

  isActive(linkName) {
    return linkName === this.props.active;
  }

  renderNavLinks() {
    return pageNames.map((pageName) => {
      const navLinkName = pageName.toLowerCase();
      const className = 'mdl-navigation__link'.concat(this.isActive(navLinkName) ? ' nav-active' : '');
      const idName = 'nav_' + navLinkName;
      const href = '#' + navLinkName;

      return <a className={className} key={idName} href={href} id={idName} onClick={this.props.onNavigate}>{pageName}</a>;
    });
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-layout--fixed-header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">SWX-TMG</span>
          <nav className="mdl-navigation">
            {this.renderNavLinks()}
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  active: PropTypes.string,
  onNavigate: PropTypes.func
};

Header.defaultProps = {
  active: '',
  onNavigate: () => {}
};
