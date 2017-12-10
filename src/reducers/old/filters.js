import moment from 'moment';



const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : moment().startOf('month'), // start of the currnet month
    endDate : moment().endOf('month'), // end of the current month
};



export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.date
            };
            break;
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.date
            };
            break;
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : 'date',
            };
            break;
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : 'amount'
            };
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};