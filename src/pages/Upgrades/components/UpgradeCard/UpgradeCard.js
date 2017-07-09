import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upgrade } from '../../../../services/upgradesService.js';

export class UpgradeCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='card upgrade'>
        <div className='upgrade-name'>{this.props.card.name}</div>
        <div className='upgrade-category'>{this.props.card.category}</div>
        <div className='upgrade-cost'>{this.props.card.cost}</div>
        <div className='upgrade-flavorText'>{this.props.card.flavourText}</div>
        <div className='upgrade-description'>{this.props.card.description}</div>
        <div className='upgrade-factions'>{this.props.card.factions}</div>
        <div className='upgrade-pilots'>{this.props.card.pilots}</div>
        <div className='upgrade-expansions'>{this.props.card.expansions}</div>
      </div>
    );
  }
}

UpgradeCard.propTypes = {
  card: PropTypes.shape(Upgrade).isRequired
};
