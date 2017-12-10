/**
 * Created by HP on 01-Dec-17.
 */
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseItem';
import visibleExpenses from '../selectors/expenses';
import { sortByAmount, sortByDate } from '../actions/filters';

export const ExpenseList = (props) => {
    //console.log(props.expenses);
    return (
        <div>
            <select onClick={e => props.dispatch(e.target.value === 'amount' ? sortByAmount() : sortByDate() )}>
                <option value="amount">Amount</option>
                <option value="date">Date</option>
            </select>
            <h1>Expense List</h1>
            {props.expenses.map(exp => {
                return <ExpenseListItem key={exp.id} {...exp}/>
            })}
        </div>
    )

};

const mapStateToProps = (state) => { // explanation of how it works is in lec 101
    return {
        expenses: visibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
