import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { App } from './app';

let component;

test.beforeEach(() => {
  component = shallow(<App />);
});

test('says hello world', (t) => {
  t.is(component.text(), 'Hello World');
});
