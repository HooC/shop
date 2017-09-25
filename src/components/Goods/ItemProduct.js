import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ItemProduct extends Component {
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
                        <button className="product-item__button">Buy</button>
                    </div>
            

        )
    }
}

export default ItemProduct;