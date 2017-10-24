import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Upgrade } from '../../../services/upgrades';

import './styles.css';

export default class UpgradeCard extends Component {
  constructor() {
    super();
  }

  renderDescription() {
    const text = this.props.card.text;
    const actionHeaderRegex = /^Action:/i;
    if (actionHeaderRegex.test(text)) {
      const modifiedText = text.replace(actionHeaderRegex, '');
      return (<p><b>Action:</b>{modifiedText}</p>);
    } else {
      return (<p>{this.props.card.text}</p>);
    }
  }

  render() {
    const renderedDescription = this.renderDescription();
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
          <br />
          <div className='mdl-grid--no-spacing'>
            <div className='upgrade-text'>{renderedDescription}</div>
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
