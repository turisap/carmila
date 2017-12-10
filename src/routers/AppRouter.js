/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import HomePage from '../components/pages/HomePage';
import Chiefs from '../components/pages/Chiefs';
import Dishes from '../components/pages/Dishes';
import Order from '../components/pages/Order';
import Header from '../components/pages/Header';
import Footer from '../components/pages/Footer';
import About from '../components/pages/About';
import News from '../components/pages/News';
import PageNotFound from '../components/pages/404.js';


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