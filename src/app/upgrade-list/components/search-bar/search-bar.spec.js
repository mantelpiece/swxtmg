import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import Sinon from 'sinon';

import SearchBar from './search-bar';

let component;
test.beforeEach(() => {
  component = shallow(<SearchBar onChange={() => {}}/>);
});

test('should exist', t => {
  t.is(component.exists(), true);
});

test('should call the thing', t => {
  const spy = Sinon.spy();
  component.setProps({ onChange: spy });
  component.find('#upgradeSearchBar').simulate('change', { target: { value: 'hello' }});
  t.is(spy.callCount, 1);
});

test('clicking on a category should disable it', t => {
  const categoryChip = component.find('.mdl-chip').first();
  const isActive = categoryChip.hasClass('active');
  categoryChip.simulate('click');
  t.is(component.find('.mdl-chip').first().hasClass('active'), !isActive);
});
