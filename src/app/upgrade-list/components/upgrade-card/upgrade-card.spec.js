import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import UpgradeCard from './upgrade-card';

let component;

const upgradeCard = {
  name: 'name',
  text: 'text',
  category: 'category',
  cost: '0'
};

test.beforeEach(() => {
  component = shallow(<UpgradeCard card={upgradeCard} closeCardFn={() => {}}/>);
});

test('should be a div', t => {
  t.is(component.type(), 'div');
});

test('should have some contents', t => {
  t.is(component.find('.upgrade-name').exists(), true);
  t.is(component.find('.upgrade-name').text(), 'name');

  t.is(component.find('.upgrade-category').exists(), true);
  t.is(component.find('.upgrade-category').text(), 'category');

  t.is(component.find('.upgrade-cost').exists(), true);
  t.is(component.find('.upgrade-cost').text(), 'Cost: 0');

  t.is(component.find('.upgrade-text').exists(), true);
  t.is(component.find('.upgrade-text').text(), 'text');
});

test('should replace the Action header', t => {
  component.setProps({card: { text: 'Action: Do the thing' }});
  const upgradeText = component.find('.upgrade-text').childAt(0);
  t.is(upgradeText.html(), '<p><b>Action:</b> Do the thing</p>');
});
