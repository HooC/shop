import React, {Component} from 'react';
import ItemProduct from './ItemProduct';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.filter.length > 0 ? state.store.filter(item => {
            return state.filter.indexOf(item.brand) != -1
        }) : state.store
    }
}

class Goods extends Component {
    render() {
        return(
            <section className="shop-list">
                <h3>Our Goods</h3>
                <div className="product-item__wrapper">
                    {this.props.state.map((item, index) => 
                        
                        <ItemProduct key={index} data={item} />
                    
                    )}
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps)(Goods);