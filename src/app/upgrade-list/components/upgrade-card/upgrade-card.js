import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upgrade } from '../../../services/upgrades';

import './styles.css';

export default class UpgradeCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='mdl-card mdl-shadow--2dp'>
        <div className='mdl-card__title'>
          <h4 className='mdl-card__title-text upgrade-name'>{this.props.card.name}</h4>
        </div>

        <div className='mdl-card__supporting-text mdl-grid mdl-grid--no-spacing'>
          <div className='mdl-cell mdl-cell--12-col'>
            <span className='upgrade-category'>{this.props.card.category}</span>
          </div>
          <div className='mdl-cell mdl-cell--12-col'>
            <span className='upgrade-cost'>Cost: {this.props.card.cost}</span>
          </div>

          <div className='upgrade-flavorText'>{this.props.card.flavourText}</div>
          <div className='upgrade-description'>{this.props.card.description}</div>
          <div className='upgrade-factions'>{this.props.card.factions}</div>
          <div className='upgrade-pilots'>{this.props.card.pilots}</div>
          <div className='upgrade-expansions'>{this.props.card.expansions}</div>
        </div>

        <div className='mdl-card__menu'>
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
                  onClick={this.props.closeCardFn}>
            <i className="material-icons">close</i>
          </button>
        </div>
      </div>
    );
  }
}

UpgradeCard.propTypes = {
  card: PropTypes.shape(Upgrade).isRequired,
  closeCardFn: PropTypes.func.isRequired
};
