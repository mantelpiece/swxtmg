import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import UpgradeCategoryRow from './upgrade-category-row';

let component;

test.before(() => {
  component = shallow(<UpgradeCategoryRow category="Category"/>);
});

test('should be a tr containing a single th', t => {
  t.is(component.type(), 'tr');
  t.is(component.children().length, 1);
  t.is(component.childAt(0).type(), 'th');
});

test('should render the category prop in the first column', t => {
  t.is(component.childAt(0).text(), 'Category');
});
