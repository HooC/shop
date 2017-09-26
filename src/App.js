import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Goods from './components/Goods/Goods';


class App extends Component {
    render(){
        return (
           
            <div>
                

                <div className="wrapper">

                    <Sidebar />
                    
                    <Goods />
                </div>
            </div>
            
        )
    }
}

export default App;