import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { Header } from './header';

let component;

test.beforeEach(() => {
  component = shallow(<Header />);
});

test('should be a div', t => {
  t.is(component.type(), 'div');
});

test('should be awesome', t => {
  t.is(component.text(), 'SWX-TMG');
});

