import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store'
import './style.scss';
import Basket from './components/Basket/Basket';
import ItemProduct from './components/ItemProduct/ItemProduct';  
import { HashRouter, Route, Link, Switch } from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <h1>Shop on React / Redux</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
                </ul>
                
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/catalog" component={App}/>
                    <Route exact path="/basket" component={Basket}/>
                    <Route exact path="/catalog/:id" component={ItemProduct}/>
                </Switch>
        </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
