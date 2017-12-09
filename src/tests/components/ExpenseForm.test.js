/**
 * Created by HP on 03-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render expense form correctly', () => {
   const wrapper = shallow(<ExpenseForm/>);
   expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense date', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
   expect(wrapper).toMatchSnapshot();
});

test('should render an error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('form').simulate('submit', {
      preventDefault : () => {} // simulate passing of an argument to the event handler
   });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
   const value = 'New value';
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('input').at(0).simulate('change', {
      target : { value },
   });
   expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
   const value = 'New note';
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('textarea').simulate('change', {
      target : { value }
   });
   expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
   const value = '23.34';
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('input').at(1).simulate('change', {
      target : { value }
   });
   expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
   const value = '122.222';
   const wrapper = shallow(<ExpenseForm/>);
   wrapper.find('input').at(1).simulate('change', {
      target : { value }
   });
   expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid prop submission', () => {
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expenses[0]} onFormSubmit={onSubmitSpy}/>);
   wrapper.find('form').simulate('submit', {
        preventDefault : () => {} // simulate passing of an argument to the event handler
   });
   expect(wrapper.state('error')).toBe('');
   expect(onSubmitSpy).toHaveBeenCalledWith({
       description: expenses[0].description,
       amount : expenses[0].amount,
       note : expenses[0].note,
       createdAt : expenses[0].createdAt
   });
});

test('should set a date on dateChange', () => {
   const now = moment();
   const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
   expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
   const focused  = true;
   const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
   wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
   expect(wrapper.state('focused')).toEqual(focused);
});