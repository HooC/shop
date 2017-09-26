import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemBasket from './ItemBasket';

const mapStateToProps = (state) => {
    return {
        state: state.basket
    }
}

const mapActionToProps = (dispatch) => {
    return {

    }
}
class Basket extends Component {
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h1>Basket</h1>
                {this.props.state.length > 0 ?
                <div>
                <table className="basket-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.props.state.map((item, index) => (
                            <ItemBasket key={index} data={item} />
                        ))}

                    </tbody>
                </table> 
                
                <h3>Total price:&nbsp; 
                
                {this.props.state.reduce((acc, item) => (
                    acc += item.price
                ), 0)}
                
                </h3> 
                
                </div> : <h3>Basket is empty</h3>
                
                }

                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Basket);
