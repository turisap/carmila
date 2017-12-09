/**
 * Created by HP on 29-Nov-17.
 */
import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense); // we changed above line by this one with the function beneath
        this.props.history.push('/');    // redirect to the homepage
    };

    render () {
        return (
            <div>
                <h1>Add Expense</h1>
                < ExpenseForm onFormSubmit={this.onSubmit}/>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addExpense : (expense) => dispatch(addExpense(expense))
    }
};

// undefined is for mapStateToProps, the second one is for dispatch which is commented out above (lecture 124)
export default connect(undefined, mapDispatchToProps)(AddExpensePage);