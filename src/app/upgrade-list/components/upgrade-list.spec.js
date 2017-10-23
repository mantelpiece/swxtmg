import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import UpgradeList from './upgrade-list';
import UpgradeRow from './upgrade-row';
import UpgradeCategoryRow from './upgrade-category-row';

let component;
test.beforeEach(() => {
  component = shallow(<UpgradeList upgrades={[]} selectUpgradeFn={() => {}}/>);
});

test('should be a table', t => {
  t.is(component.type(), 'table');
});

test('should render all upgrades by default', t => {
  component.setProps({
    upgrades: [
      { id: 'id1', category: '1', name: '1', cost: '2' },
      { id: 'id2', category: '1', name: '1', cost: '2' },
      { id: 'id3', category: '1', name: '1', cost: '2' }
    ]
  });
  t.is(component.find('UpgradeRow').length, 3);
});

test('should render a single upgrade within a single category row', t => {
  component.setProps({upgrades: [{
    category: 'category 1',
    id: 'id1',
    name: 'name 1',
    cost: 'cost 1'
  }]});
  const tbody = component.children('tbody');
  t.is(tbody.children().length, 2);
  t.is(tbody.childAt(0).type(), UpgradeCategoryRow);
  t.is(tbody.childAt(0).prop('category'), 'category 1');
  t.is(tbody.childAt(1).type(), UpgradeRow);
  t.is(tbody.childAt(1).prop('name'), 'name 1');
  t.is(tbody.childAt(1).prop('cost'), 'cost 1');
});

test('should render single upgrades with different categories', t => {
  component.setProps({upgrades: [{
    id: 'id1',
    category: 'category 1',
    name: 'name 1',
    cost: 'cost 1'
  }, {
    id: 'id2',
    name: 'name 2',
    cost: 'cost 2',
    category: 'category 2'
  }]});

  const tbody = component.children('tbody');
  t.is(tbody.children().length, 4);
  t.is(tbody.childAt(0).type(), UpgradeCategoryRow);
  t.is(tbody.childAt(0).prop('category'), 'category 1');
  t.is(tbody.childAt(1).type(), UpgradeRow);
  t.is(tbody.childAt(2).type(), UpgradeCategoryRow);
  t.is(tbody.childAt(2).prop('category'), 'category 2');
  t.is(tbody.childAt(3).type(), UpgradeRow);
});

