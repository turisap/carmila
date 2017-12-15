/**
 * Created by HP on 02-Dec-17.
 */
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should return remove expense action object', () => {
   const action = removeExpense({id : '123abc'});
   expect(action).toEqual({
       type : "REMOVE_EXPENSE",
       id : '123abc'
   })
});

test('should return edit expense object', () => {
    const updates = {description : 'test', amount : 123, notes : 'herj'};
    const action = editExpense('123', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id : '123',
        updates : updates
    })
});

test('should return add expense action object with provided vlaues', () => {
   const expenseData =  {id : '123', description : 'tirif', amount : 23, createdAt : 'today', note : ''};
   const action = addExpense(expenseData);
   expect(action).toEqual({
       type : 'ADD_EXPENSE',
       expense : {
           ...expenseData,
           id : expect.any(String)
       }
   })
});

test('should return ad expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id : expect.any(String),
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
        }
    })
});