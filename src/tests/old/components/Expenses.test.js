/**
 * Created by HP on 03-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render with expenses', () => {
   const wrapper = shallow(<ExpenseList expenses={expenses}/>);
   expect(wrapper).toMatchSnapshot();
});