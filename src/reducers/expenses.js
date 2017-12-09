/**
 * Created by HP on 30-Nov-17.
 */
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
            break;
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
            break;
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense;
            });
        default:
            return state;
    }
};