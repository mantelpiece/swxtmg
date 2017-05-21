import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { UpgradeRow } from './UpgradeRow';

let component;

test.beforeEach(() => {
  component = shallow(<UpgradeRow name="Name" cost="Cost"/>);
});

test('should be a table row', t => {
  t.is(component.type(), 'tr');
});

test('should have two columns', t => {
  t.is(component.children('td').length, 2);
});

test('should render the name prop in the first columm', t => {
  t.is(component.children('td').at(0).text(), 'Name');
});

test('should render the cost prop in the second columm', t => {
  t.is(component.children('td').at(1).text(), 'Cost');
});
