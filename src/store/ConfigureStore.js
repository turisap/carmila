/**
 * Created by HP on 30-Nov-17.
 */
import {createStore, combineReducers} from 'redux';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(combineReducers({
        filter : filtersReducer
    }),
        // this line is for not reloading page on clicking navlinks
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

