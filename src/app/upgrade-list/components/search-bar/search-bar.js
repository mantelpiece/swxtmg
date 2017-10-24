import React from 'react';
import PropTypes from 'prop-types';

const Categories = [ 'Elite', 'Modification', 'Title', 'Astromech', 'Bomb', 'Cannon', 'Crew', 'Illicit',
  'Missile', 'Salvaged Astromech', 'System', 'Tech', 'Torpedo', 'Turret', 'Cargo', 'Hardpoint', 'Team'];

import './styles.css';

export default class SearchBar extends React.Component {

  initialState() {
    return {
      phrase: '',
      categories: {
        Elite: true,
        Modification: true,
        Title: true,
        Astromech: true,
        Bomb: true,
        Cannon: true,
        Crew: true,
        Illicit: true,
        Missile: true,
        'Salvaged Astromech': true,
        System: true,
        Tech: true,
        Torpedo: true,
        Turret: true,
        Cargo: true,
        Hardpoint: true,
        Team: true
      }
    };
  }

  constructor() {
    super();

    this.state = this.initialState();
  }

  handleSelectCategory(category) {
    const categories = { ...this.state.categories };
    categories[category] = !this.state.categories[category];
    this.setState({ categories }); 
  }

  renderCategoryIcon(category) {
    category = category.toLowerCase().replace(' ', '');
    const className = `xwing-miniatures-font xwing-miniatures-font-${category}`;
    return (<i className={className}></i>);
  }

  renderCategorySelector() {
    return Categories.map((category) => {
      return (
        <span key={category}
              id={'search_category_' + category}
              className={'mdl-chip mdl-chip--contact clickable ' + (this.state.categories[category] ? ' active' : '')}
              onClick={this.handleSelectCategory.bind(this, category)}>
          <span className='mdl-chip__contact mdl-color--white'>{this.renderCategoryIcon(category)}</span>
          <span className='mdl-chip__text'>{category}</span>
        </span>
      );
    });
  }

  render() {
    return (
      <div className="upgrade-search">
        <form action="#">
          <div className="mdl-grid">
            <div className="mdl-cell--12-col">
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       type="text"
                       id="upgradeSearchBar"
                       onChange={this.props.onChange}
                       placeholder="Search upgrades" />
              </div>
            </div>

            <div className="mdl-cell--12-col">
              <div className='category-selector'>{this.renderCategorySelector()}</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};
