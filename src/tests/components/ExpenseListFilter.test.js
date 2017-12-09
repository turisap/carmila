/**
 * Created by HP on 05-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, setStartDate, setEndDate, setFocusChange;

beforeEach(() => {
   setTextFilter = jest.fn();
   setStartDate = jest.fn();
   setEndDate = jest.fn();
   wrapper = shallow(<ExpenseListFilters
       filters={filters}
       setTextFilter={setTextFilter}
       setStartDate={setStartDate}
       setEndDate={setEndDate}
       setFocusChange={setFocusChange}
   />)
});

test('should render the ExpenseListFilters component correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilter with altered filters', () => {
    wrapper.setProps({
        filters : altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'tirif';
    wrapper.find('input').simulate('change', {
        target : { value }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should handle dates change', () => {
   const startDate = moment(5);
   const endDate = moment(10);
   wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
   expect(setStartDate).toHaveBeenCalledWith(startDate);
   expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle dates change', () => {
   const calendarFocused = 'endDate';
   wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
   expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});