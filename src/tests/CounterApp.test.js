import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Test in <CounterApp /> component', () => {
  test('should display the <CounterApp /> component correctly', () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should show the default value of 100 sent in in the properties', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterValue = wrapper.find('#counterValue').text();
    expect(counterValue).toBe('100');
  });
});
