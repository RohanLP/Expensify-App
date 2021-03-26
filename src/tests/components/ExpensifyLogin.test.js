import React from 'react';
import { shallow } from 'enzyme';
import {ExpensifyLogin} from '../../components/ExpensifyLogin';

test('should render ExpensifyLogin correctly', () => {
  const wrapper = shallow(<ExpensifyLogin />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<ExpensifyLogin startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});