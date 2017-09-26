import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        state: state.basket
    }
}

const mapActionToProps = (dispatch) => {
    return {
        removeItemBasket: (value) => {
            dispatch({
                type: 'REMOVE_ITEM',
                payload: value
            })
        }
    }
}
class ItemBasket extends Component {

    removeItem(e) {
        e.preventDefault();
        this.props.removeItemBasket(this.props.data)
    }

    render(){
        const srcImage = require(`../../images/${this.props.data.img}.jpg`);

        return (
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>
                        <Link to={`/catalog/${this.props.data.id}`}>
                            <img className="basket-table__img" src={srcImage} />
                        </Link>
                    </td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.price}</td>  
                    <td>{this.props.data.count}</td>
                    <td>
                        <a className="basket-table__delete" onClick={this.removeItem.bind(this)} href="#">
                            Delete
                        </a>
                    </td>
                </tr>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(ItemBasket);
