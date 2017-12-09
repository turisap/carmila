/**
 * Created by HP on 02-Dec-17.
 */
import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default set', () =>{
    const state = expensesReducers(undefined, {type : '@@INIT'});
    expect(state).toEqual([])
});

test('should remove an expense by id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id   : expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if it is not found via id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id   :  '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type : 'ADD_EXPENSE',
        expense : {
            id : '34',
            description : 'TEsting',
            amount : 1234,
            createdAt : moment(2343984792384)
        }
    };

    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, {
        id : '34',
        description : 'TEsting',
        amount : 1234,
        createdAt : moment(2343984792384)
    }])
});

test('should edit an expense ', () => {
    const action = {
        type : 'EDIT_EXPENSE',
        id   : '1',
        updates : {
            description : 'LSD',
            amount : 150,
            note : '',
            createdAt : 1970,
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[0]).toEqual({
        id : '1',
        description : 'LSD',
        amount : 150,
        note : '',
        createdAt : 1970,
    })
});

test('should not edit an expense if id is\'t found', () => {
    const action = {
        type : 'EDIT_EXPENSE',
        id   : 'dkf',
        updates : {
            description : 'LSD',
            amount : 150,
            note : '',
            createdAt : 1970,
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});