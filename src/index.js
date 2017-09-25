import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store'
import './style.scss';
import Goods from './components/Goods/Goods';
import ItemProduct from './components/ItemProduct/ItemProduct';  
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/catalog" component={App}/>
                    <Route exact path="/catalog/:id" component={ItemProduct}/>
                </Switch>
            {/* <App /> */}
        </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
