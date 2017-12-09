/**
 * Created by HP on 01-Dec-17.
 */
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


const date = moment().format('MMM Do, YYYY');

export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt : props.expense ? new Date(moment(props.expense.createdAt).valueOf()) : new Date(),
            error : '',
            calendarFocused : null,
        };
    }

    onDescriptionChange = (e) => {
        this.setState({
            description : e.target.value
        })
    };

    onNotesChange = (e) => {
        this.setState({
            note : e.target.value
        })
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({
                amount : e.target.value
            })
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt)this.setState({ createdAt : createdAt});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({error : 'You haven\' filled amount or description'});
            return;
        }
        this.setState({error : ''});
        this.props.onFormSubmit({
            description : this.state.description,
            amount : parseFloat(this.state.amount) * 100,
            createdAt : moment(this.state.createdAt).valueOf(),
            note : this.state.note
        })
    };

    render() {
        //console.log(this.props.expense.description)
        //console.log(this.state)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        onDateChange={this.onDateChange}
                        focused={this.state.focused} // PropTypes.bool
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    />
                    <textarea
                        placeholder="Put noutes about this expense (optional)"
                        onChange={this.onNotesChange}
                        value={this.state.notes}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}