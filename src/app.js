import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'antd/dist/antd.css';

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>, document.getElementById('app')
);

