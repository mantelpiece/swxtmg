import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { App } from './app';
import { Header } from './views/header';
import { Footer } from './views/footer';

let component;

test.beforeEach(() => {
  component = shallow(<App />);
});

test('should wrap in a div', t => {
  t.is(component.type(), 'div');
});

test('should start with a header', (t) => {
  t.is(component.children().first().type(), Header);
});

test('should end with a footer', (t) => {
  t.is(component.children().last().type(), Footer);
});
