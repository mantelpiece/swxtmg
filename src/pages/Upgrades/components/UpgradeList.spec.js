import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { UpgradeList } from './UpgradeList';
import { UpgradeRow } from './UpgradeRow';
import { UpgradeCategoryRow } from './UpgradeCategoryRow';

let component;

test.beforeEach(() => {
  component = shallow(<UpgradeList upgrades={[]} />);
});

test('should be a table', t => {
  t.is(component.type(), 'table');
});

test('should render an empty table body when given no upgrades', t => {
  component.setProps({upgrades: []});
  t.is(component.children('tbody').children().length, 0);
});

test('should render a single upgrade within a single category row', t => {
  const upgrade = {
    name: 'name',
    cost: 'cost',
    category: 'category'
  };
  component.setProps({upgrades: [upgrade]});
  const tbody = component.children('tbody');
  t.is(tbody.children().length, 2);
  t.is(tbody.childAt(0).type(), UpgradeCategoryRow);
  t.is(tbody.childAt(0).prop('category'), 'category');
  t.is(tbody.childAt(1).type(), UpgradeRow);
  t.is(tbody.childAt(1).prop('name'), 'name');
  t.is(tbody.childAt(1).prop('cost'), 'cost');
});

test('should render single upgrades with different categories', t => {
  const upgrades = [{
    name: 'name 1',
    cost: 'cost 1',
    category: 'category 1'
  }, {
    name: 'name 2',
    cost: 'cost 2',
    category: 'category 2'
  }];
  component.setProps({upgrades});
  const tbody = component.children('tbody');
  t.is(tbody.children().length, 4);
  t.is(tbody.childAt(0).type(), UpgradeCategoryRow);
  t.is(tbody.childAt(0).prop('category'), 'category 1');
  t.is(tbody.childAt(1).type(), UpgradeRow);
  t.is(tbody.childAt(2).type(), UpgradeCategoryRow);
  t.is(tbody.childAt(2).prop('category'), 'category 2');
  t.is(tbody.childAt(3).type(), UpgradeRow);
});

