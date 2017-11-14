import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upgrade } from '../../../services/upgrades';

import './styles.css';

export default class UpgradeCard extends Component {
  constructor() {
    super();
  }

  renderRestrictions() {
    return (<div className='mdl-cell mdl-cell--12-col upgrade-restrictions'>{this.props.card.restrictions}</div>);
  }

  renderDescription() {
    // TODO: Replace words with icons?
    const text = this.props.card.text;
    const actionHeaderRegex = /^((action|energy|attack)[^:]*):/i;
    const matches = text.match(actionHeaderRegex);
    const actionHeader = matches && matches[1];

    let contents;
    if (actionHeader) {
      const modifiedText = text.replace(actionHeaderRegex, '');
      contents = (<p><b>{actionHeader}:</b>{modifiedText}</p>);
    } else {
      contents = (<p>{this.props.card.text}</p>);
    }

    return (<div className='mdl-cell mdl-cell--12-col upgrade-text'>{contents}</div>);
  }

  render() {
    return (
      <div className='mdl-card mdl-shadow--2dp'>
        <div className='mdl-card__title upgrade-card__title'>
          <h4 className='mdl-card__title-text upgrade-name'>{this.props.card.name}</h4>
        </div>

        <div className='mdl-card__supporting-text'>
          <div className='mdl-grid mdl-grid--no-spacing upgrade-card__sub-title'>
            <div className='mdl-cell mdl-cell--6-col upgrade-category'>{this.props.card.category}</div>
            <div className='mdl-cell mdl-cell--6-col upgrade-cost'>Cost: {this.props.card.cost}</div>
          </div>

          <div className='mdl-grid'>
            { this.props.card.restrictions !== '' ? this.renderRestrictions() : '' }
            { this.props.card.description !== '' ? this.renderDescription() : '' }
          </div>

          <br />

          <div className='mdl-grid mdl-grid--no-spacing'>
            <div className='mdl-cell'></div>
          </div>
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
