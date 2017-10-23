import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import UpgradeRow from './upgrade-row';

let component;

test.beforeEach(() => {
  component = shallow(<UpgradeRow id="id" name="Name" cost="Cost" handleOnClick={() => {}}/>);
});

test('should be a table row', t => {
  t.is(component.type(), 'tr');
});

test('should have two columns', t => {
  t.is(component.children('td').length, 2);
});

test('should render the name prop in the first columm', t => {
  t.is(component.children('td').at(0).text(), 'Name');
});

test('should render the cost prop in the second columm', t => {
  t.is(component.children('td').at(1).text(), 'Cost');
});


test('should call the passed in click handler when the user clicks on a row', t => {
  const spy = sinon.spy();
  component.setProps({
    handleOnClick: spy
  });

  component.find('tr').simulate('click');
  t.is(spy.callCount, 1);
  t.is(spy.firstCall.args[0], 'id');
});
