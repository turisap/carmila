import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import { addExpense } from './actions/expenses';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = ConfigureStore();

store.dispatch(addExpense({description : 'Water bill', amount : moment().add(3, 'days').valueOf()}));
store.dispatch(addExpense({description : 'Gas bill', amount : 234, createdAt : moment().valueOf()}));
store.dispatch(addExpense({description : 'Electric bill', amount : 4500, createdAt: moment().add(6, 'days').valueOf()}));

const state = store.getState();

let hasRendered = false;
if(!hasRendered){
    ReactDOM.render(
        <Provider store={store}>
            <AppRouter/>
        </Provider>, document.getElementById('app'));
    hasRendered = true;
}


ReactDOM.render(<p>Loading.....</p>, document.getElementById('app'));
