import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';

import { Footer } from './footer';

let component;

test.beforeEach(() => {
  component = shallow(<Footer />);
});

test('should be a div', t => {
  t.is(component.type(), 'footer');
});

test('should be awesome', t => {
  t.is(component.text(), 'Awesomed');
});

