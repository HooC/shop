import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {}
}

const mapActionToProps = (dispatch) => {
    return {
        addTobasket: (value) => {
            dispatch({
                type: 'ADD_BASKET',
                payload: value
            })
        }
    }
}
class ItemProduct extends Component {
    
    addBasket() {
        this.props.addTobasket(this.props.data);
    }

    render() {
        const srcImage = require(`../../images/${this.props.data.img}.jpg`);
        return(
                
                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={srcImage} />
                        </div>
                        <h3 className="product-item__title">
                            <Link to={`/catalog/${this.props.data.id}`}>
                                {this.props.data.name}
                            </Link>
                        </h3>
                        <div className="product-item__price">{this.props.data.price}</div>
                        <Link to={`/catalog/${this.props.data.id}`} className="product-item__more">More</Link>
                        <button className="product-item__button" onClick={this.addBasket.bind(this)}>Buy</button>
                    </div>
            

        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(ItemProduct);