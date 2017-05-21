import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { UpgradeCard } from './UpgradeCard';

let component;

const upgradeCard = {
  name: 'name'
};

test.beforeEach(() => {
  component = shallow(<UpgradeCard card={upgradeCard}/>);
});

test.skip('should be a div', t => {
  t.is(component.type(), 'div');
});

test.skip('should have the "swx-upgrade" class', t => {
  t.is(component.hasClass('swx-upgrade'), true);
});

test.skip('should have a title as the first child', t => {
  const title = component.childAt(0);
  t.is(title.type(), 'div');
  t.is(title.hasClass('card-title'), true);
  t.is(title.text(), upgradeCard.name);
});

