import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';

import FirstApp from '../FirstApp';

describe('Test in <FirstApp /> component', () => {
  // test with jest dom extend expect
  // test('should show the message "Hola, soy Goku"', () => {
  //   const saludo = 'Hola, soy Goku';
  //   const { getByText } = render(<FirstApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  // test with enzyme
  test('should display the <FirstApp /> component correctly', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<FirstApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
});
