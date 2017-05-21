import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upgrade } from '../../services/upgradesService.js';

export class UpgradeCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='swx-card'>
        <div className='card-title'>{this.props.card.name}</div>
      </div>
    );
  }
}

UpgradeCard.propTypes = {
  card: PropTypes.shape(Upgrade).isRequired
};
