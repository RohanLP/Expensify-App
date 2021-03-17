import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render expenses summary for one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={24} expensesTotal={123456789} />);
  expect(wrapper).toMatchSnapshot();
});