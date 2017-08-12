import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upgrade } from '../../../../services/upgradesService.js';

import './styles.css';

export class UpgradeCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='mdl-card mdl-shadow--2dp'>
        <div className='mdl-card__title'>
          <h4 className='mdl-card__title-text'>{this.props.card.name}</h4>
        </div>
        <div className='mdl-card__supporting-text'>
          <div className='upgrade-category'>{this.props.card.category}</div>
          <div className='upgrade-cost'>{this.props.card.cost}</div>
          <div className='upgrade-flavorText'>{this.props.card.flavourText}</div>
          <div className='upgrade-description'>{this.props.card.description}</div>
          <div className='upgrade-factions'>{this.props.card.factions}</div>
          <div className='upgrade-pilots'>{this.props.card.pilots}</div>
          <div className='upgrade-expansions'>{this.props.card.expansions}</div>
        </div>
      </div>
    );
  }
}

UpgradeCard.propTypes = {
  card: PropTypes.shape(Upgrade).isRequired
};
