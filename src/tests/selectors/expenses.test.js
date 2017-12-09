/**
 * Created by HP on 02-Dec-17.
 */
import visibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filter = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    expect(visibleExpenses(expenses, filter)).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
   const filter = {
       text : '',
       sortBy : 'date',
       startDate : moment(0),
       endDate : undefined
   };
   expect(visibleExpenses(expenses, filter)).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const filter = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : moment(0)
    };
    expect(visibleExpenses(expenses, filter)).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filter = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    expect(visibleExpenses(expenses, filter)).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filter = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    expect(visibleExpenses(expenses, filter)).toEqual([expenses[1], expenses[0], expenses[2]]);
});