import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Goods from './components/Goods/Goods';
import SmallBasket from './components/Basket/SmallBasket';
import Search from './components/Search/Search';

class App extends Component {
    render(){
        return (
           
            <div>
                <div>
                <SmallBasket />
                <Search />
                </div>
                <div className="wrapper">
                    
                    <Sidebar />
                    
                    <Goods />
                </div>
            </div>
            
        )
    }
}

export default App;