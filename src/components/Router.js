import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';
const route =()=>
(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/recipe/:id" component={Recipe}></Route>
            </Switch>
        </BrowserRouter>
)

export default route;