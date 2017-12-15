/**
 * Created by HP on 03-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('should render the dashboard page', () => {
   const wrapper = shallow(<ExpenseDashboard/>);
   expect(wrapper).toMatchSnapshot();
});