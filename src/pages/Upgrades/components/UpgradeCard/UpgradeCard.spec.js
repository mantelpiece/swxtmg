import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { UpgradeCard } from './UpgradeCard';

let component;

const upgradeCard = {
  name: 'name'
};

test.beforeEach(() => {
  component = shallow(<UpgradeCard card={upgradeCard} closeCardFn={() => {}}/>);
});

test('should be a div', t => {
  t.is(component.type(), 'div');
});

test('should have some contents', t => {
  t.is(component.find('.upgrade-name').exists(), true);
  t.is(component.find('.upgrade-category').exists(), true);
  t.is(component.find('.upgrade-description').exists(), true);
  t.is(component.find('.upgrade-cost').exists(), true);
  t.is(component.find('.upgrade-factions').exists(), true);
  t.is(component.find('.upgrade-pilots').exists(), true);
  t.is(component.find('.upgrade-expansions').exists(), true);
});

