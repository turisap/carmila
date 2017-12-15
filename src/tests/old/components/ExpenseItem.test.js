/**
 * Created by HP on 03-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseItem';
import expenses from '../fixtures/expenses';

test('should correctly render expense item', () => {
   const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
   expect(wrapper).toMatchSnapshot();
});