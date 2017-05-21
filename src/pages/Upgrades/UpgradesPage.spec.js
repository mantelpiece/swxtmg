import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { UpgradesPage } from './UpgradesPage';
import { getAllUpgrades } from '../../services/upgradesService';

let component;

test.beforeEach(() => {
  component = shallow(<UpgradesPage />);
});

test('should be a section', t => {
  t.is(component.type(), 'section');
});

test.skip('should have a search thingo', () => {
});

test('should render an Upgrades list', t => {
  t.is(component.children('UpgradeList').length, 1);
});

test('should pass all the upgrades to the list TEMPORARILY', t => {
  t.deepEqual(component.children('UpgradeList').prop('upgrades'), getAllUpgrades());
});
