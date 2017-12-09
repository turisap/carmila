/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import HomePage from '../components/HomePage';
import Chiefs from '../components/Chiefs';
import Dishes from '../components/Dishes';
import Order from '../components/Order';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import News from '../components/News';
import PageNotFound from '../components/404.js';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/chiefs" component={Chiefs} />
                <Route path="/dishes" component={Dishes} />
                <Route path="/order" component={Order} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;