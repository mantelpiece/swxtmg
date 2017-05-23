import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { UpgradesPage } from './UpgradesPage';

let component;
test.beforeEach(() => {
  component = shallow(<UpgradesPage allUpgrades={[]}/>);
});

test('should be a section', t => {
  t.is(component.type(), 'section');
});

test('should have a search bar', t => {
  t.is(component.find('.upgrade-search').exists(), true);
});

test('should set a searchPhrase state property', t => {
  const searchBarInput = component.find('#upgradeSearchBar');
  searchBarInput.prop('onChange')({ target: { value: 'search' }});
  component.update();
  t.is(component.state('searchPhrase'), 'search');
});

test('should render an Upgrades list', t => {
  t.is(component.children('UpgradeList').length, 1);
});

test('should pass an array of upgrades to the Upgrades list', t => {
  const upgrades = [];
  component.setProps({ allUpgrades: upgrades });
  const upgradeList = component.find('UpgradeList');
  t.is(upgradeList.prop('upgrades'), upgrades);
});

test('should filter the passed upgrades based on the search phrase', t => {
  const searchBar = component.find('#upgradeSearchBar');
  component.setProps({
    allUpgrades: [
      { keywords: ['yes'], name: 'yes' },
      { keywords: ['no'], name: 'no'}
    ]
  });
  searchBar.prop('onChange')({ target: { value: 'yes' }});
  component.update();
  const upgradeList = component.find('UpgradeList');
  t.is(upgradeList.prop('upgrades').length, 1);
  t.is(upgradeList.prop('upgrades')[0].name, 'yes');
});
