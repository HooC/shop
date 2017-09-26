import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store'
import './style.scss';
import Basket from './components/Basket/Basket';
import ItemProduct from './components/ItemProduct/ItemProduct';  
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <h1>Shop on React / Redux</h1>

                <Menu />
                
                <Switch>
                    {/* <Route exact path="/"/> */}
                    <Route exact path="/" component={App}/>
                    <Route exact path="/basket" component={Basket}/>
                    <Route exact path="/catalog/:id" component={ItemProduct}/>
                </Switch>
        </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
