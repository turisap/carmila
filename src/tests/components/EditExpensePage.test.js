/**
 * Created by HP on 05-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage }  from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
    history = { push : jest.fn() };
    editExpense = jest.fn();
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[0]}
    />);
});

test('should render the editExpensePage component properly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense() form submission', () => {
   wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[0]);
   expect(history.push).toHaveBeenCalledWith('/');
   expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense()', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith(expenses[0].id);
})