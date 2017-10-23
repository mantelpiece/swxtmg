import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import UpgradeListContainer from './upgrade-list-container';

let component;
test.beforeEach(() => {
  component = shallow(<UpgradeListContainer allUpgrades={[]}/>);
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
  t.is(component.find('UpgradeList').exists(), true);
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

test('should not render a UpgradeCard detail view when an upgrade is not selected', t => {
  component.setState({ selectedUpgrade: null });
  t.is(component.find('UpgradeCard').exists(), false);
});

test('should render a UpgradeCard when an upgrade is selected', t => {
  component.setState({ selectedUpgrade: { id: 'some-id', name: 'yes' }});
  t.is(component.find('UpgradeCard').exists(), true);
});

test('changing the searchPhrase should clear the selected upgrade', t => {
  const upgrade = {id: 'some-id', keywords: ['some-id']};
  component.setProps({allUpgrades: [ upgrade ]});
  component.setState({selectedUpgrade: upgrade});
  t.is(component.find('UpgradeCard').exists(), true);
  const searchBar = component.find('#upgradeSearchBar');
  searchBar.prop('onChange')({ target: { value: 'should not match' }});
  t.is(component.find('UpgradeCard').exists(), false);
});

test('changing the searchPhrase should not clear the selected upgrade if it matches', t => {
  const upgrade = {id: 'some-id', keywords: ['some-id']};
  component.setProps({allUpgrades: [ upgrade ]});
  component.setState({selectedUpgrade: upgrade});
  t.is(component.find('UpgradeCard').exists(), true);
  const searchBar = component.find('#upgradeSearchBar');
  searchBar.prop('onChange')({ target: { value: 'some-id' }});
  t.is(component.find('UpgradeCard').exists(), true);
  t.is(component.state().selectedUpgrade, upgrade);
});

test('changing the searchPhrase should select a card if it is the only matching card', t => {
  const upgrades = [
    {id: 'some-id1', keywords: ['hello', 'shared']},
    {id: 'some-id2', keywords: ['goodbye', 'shared']},
    {id: 'some-id3', keywords: ['banana', 'shared']}
  ];
  component.setProps({allUpgrades: upgrades});
  const searchBar = component.find('#upgradeSearchBar');
  searchBar.prop('onChange')({ target: { value: 'shared' }});
  t.is(component.state().selectedUpgrade, null);
  searchBar.prop('onChange')({ target: { value: 'hello' }});
  t.is(component.state().selectedUpgrade, upgrades[0]);
});
