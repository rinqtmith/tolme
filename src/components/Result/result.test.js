import React from 'react';
import { shallow } from 'enzyme';

import Result from './result.component';

describe('Result Component', () => {
  it("should render component when result doesn't have value, and value is not angular", () => {
    const mockProps = {
      result: '0,5',
      checkValue: '12',
      value: 'radius',
    };

    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render component when result doesn't have value, and value is angular", () => {
    const mockProps = {
      result: '0,5',
      checkValue: '12',
      value: 'angular',
    };

    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component when result have value', () => {
    const mockProps = {
      result: 'Value must be lower than 4000',
      checkValue: '12',
      value: 'angular',
    };

    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component when result have value', () => {
    const mockProps = {
      result: 'Thickness should be greater than 0',
      checkValue: '12',
      value: 'angular',
    };

    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
