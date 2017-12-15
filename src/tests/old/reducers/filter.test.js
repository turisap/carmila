/**
 * Created by HP on 02-Dec-17.
 */
import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
   const state =  filterReducer(undefined, {type : '@@INIT'});
   expect(state).toEqual({
       text : '',
       sortBy : 'date',
       startDate : moment().startOf('month'),
       endDate  : moment().endOf('month')
   })
});

test('should set sort by amoung', () => {
   const state = filterReducer(undefined, {type : 'SORT_BY_AMOUNT'}); // undefined because we pass the default state
   expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
    const currentState = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    const result = filterReducer(currentState, {type : 'SORT_BY_DATE'});
    expect(result.sortBy).toBe('date');
});

test('should set text filter', () => {
   const state = filterReducer(undefined, {type : 'SET_TEXT_FILTER', text : 'tiribilka'});
   expect(state.text).toBe('tiribilka');
});

test('should set start date filter', () => {
   const state = filterReducer(undefined, {type : 'SET_START_DATE', date : moment(0)});
   expect(state.startDate).toEqual(moment(0));
});

test('should set endDateFilter', () => {
   const state = filterReducer(undefined, {type : 'SET_END_DATE', date : moment(0)});
   expect(state.endDate).toEqual(moment(0));
});