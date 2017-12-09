/**
 * Created by HP on 02-Dec-17.
 */
import moment from 'moment';

const expenses = [
    {
        id : '1',
        description : 'Gum',
        amount : 123,
        note : '',
        createdAt : 0,
    },
    {
        id : '2',
        description : 'Rent',
        amount : 1934,
        note : '',
        createdAt : moment(0).subtract(7, 'days').valueOf()
    },
    {
        id : '3',
        description : 'Credit Card',
        amount : 12,
        note : '',
        createdAt : moment(0).add(4, 'days').valueOf()
    }];

export default expenses;