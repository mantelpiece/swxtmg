import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
  return (
    <div className="upgrade-search">
      <form action="#">
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input"
                 type="text"
                 id="upgradeSearchBar"
                 onChange={props.onChange}
                 placeholder="Search upgrades" />
        </div>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};
