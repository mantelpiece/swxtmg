import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { Header } from './Header';

let component;

test.beforeEach(() => {
  component = shallow(<Header />);
});

test('should be a <header>', t => {
  t.is(component.type(), 'header');
});

test.skip('should be awesome', t => {
  t.is(component.text(), 'SWX-TMG');
});

