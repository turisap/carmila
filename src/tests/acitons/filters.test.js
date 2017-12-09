/**
 * Created by HP on 02-Dec-17.
 */
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('should generate a setStartDate action object', () => {
    const startDate = setStartDate(moment(0));
    expect(startDate).toEqual({
        type : 'SET_START_DATE',
        date : moment(0),
    })
});

test('should generate a setEndDate action object', () => {
    const endDate = setEndDate(moment(0));
    expect(endDate).toEqual({
        type : 'SET_END_DATE',
        date : moment(0)
    })
});

test('should generate a setTExtFilter action object', () => {
    const textObj = setTextFilter('titip');
    expect(textObj).toEqual({
        type : 'SET_TEXT_FILTER',
        text : 'titip'
    })
});

test('should generate a setTExtFilter action object', () => {
    const textObj = setTextFilter();
    expect(textObj).toEqual({
        type : 'SET_TEXT_FILTER',
        text : ''
    })
});

test('should generate a sortByDate action object', () => {
    expect(sortByDate()).toEqual({
        type : 'SORT_BY_DATE'
    })
});

test('should generate a sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({
        type : 'SORT_BY_AMOUNT'
    })
})