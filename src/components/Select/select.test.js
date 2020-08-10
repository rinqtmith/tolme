import React from 'react';
import { shallow } from 'enzyme';

import Select from './select.component';
import { Dropdown } from 'semantic-ui-react';

describe('Select Component', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      name: 'class',
      label: 'class label',
      standard: [
        {
          key: 1,
          value: 'some value',
          text: 'some text',
        },
        {
          key: 2,
          value: 'some value',
          text: 'some text',
        },
      ],
      handleChanges: jest.fn(),
      show: true,
      value: 'some value',
    };

    wrapper = shallow(<Select {...mockProps} />);
  });

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass event and data to given function', () => {
    expect(wrapper.find(Dropdown).simulate('change')).toBeDefined();
  });
});
