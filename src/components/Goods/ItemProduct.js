import React, {Component} from 'react';


class ItemProduct extends Component {
    render() {
        const srcImage = require(`../../images/${this.props.data.img}.jpg`);
        return(
                
                <div className="product-item">
                    <div className="product-item__img">
                        <img src={srcImage} />
                    </div>
                    <h3 className="product-item__title">{this.props.data.name}</h3>
                    <div className="product-item__price">{this.props.data.price}</div>
                    <button className="product-item__button">Buy</button>
                </div>

        )
    }
}

export default ItemProduct;