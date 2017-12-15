/**
 * Created by HP on 05-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

// creating onSubmit, history spies and wrapper before each test
let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn(); // props onSubmit as a spy lecture 124
    history = { push : jest.fn() }; // history prop with a spy
    wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history}/>);
});

test('should render AddExpensePage component properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});