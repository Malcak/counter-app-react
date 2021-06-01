import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Test in <CounterApp /> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test('should display the <CounterApp /> component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should show the default value of 100 sent in in the properties', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterValue = wrapper.find('#counterValue').text();
    expect(counterValue).toBe('100');
  });
  test('should increment the counter when the add button is pressed', () => {
    wrapper.find('#add').simulate('click');
    const counterValue = wrapper.find('#counterValue').text();
    expect(counterValue).toBe('1');
  });
  test('should reset the counter when the reset button is pressed', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find('#add').simulate('click');
    wrapper.find('#reset').simulate('click');
    const counterValue = wrapper.find('#counterValue').text();
    expect(counterValue).toBe(value.toString());
  });
  test('should decrement the counter when the subtract button is pressed', () => {
    wrapper.find('#subtract').simulate('click');
    const counterValue = wrapper.find('#counterValue').text();
    expect(counterValue).toBe('-1');
  });
});
