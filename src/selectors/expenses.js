/**
 * Created by HP on 30-Nov-17.
 */
import moment from 'moment';

const visibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(exp => {
        const createdAtMoment = moment(exp.createdAt);
        const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch   = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });

};

export default visibleExpenses;