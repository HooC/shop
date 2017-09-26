import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.store.find(item => item.id === Number(ownProps.match.params.id))
    };
}

class ItemProduct extends Component {

    render(){
        const srcImage = require(`../../images/${this.props.item.img}.jpg`);

        return (
            <div className="product">
                <h1 className="product__title">{this.props.item.name}</h1>
                <p className="product__img"><img src={srcImage} /></p>
                <p className="product__price">{this.props.item.price}</p>

                <button className="product__but">Buy</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ItemProduct);