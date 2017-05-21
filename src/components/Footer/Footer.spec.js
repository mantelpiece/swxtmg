import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { Footer } from './Footer';

let component;

test.beforeEach(() => {
  component = shallow(<Footer />);
});

test('should be a footer', t => {
  t.is(component.type(), 'footer');
});

test('should be awesome', t => {
  t.is(component.text(), 'Awesomed');
});

