import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.brands
    }
}

const mapActionToProps = (dispatch) => {
    return{
        onChangeCatalog: (value) => {
            dispatch({
                type: 'FILTER_BRAND',
                payload: value
            })
        }
    }
}

class Item extends Component {

    filterBrand(){
        this.props.onChangeCatalog(this.input.value);
    }

    render() {
        return(

                <li>
                    <label onChange={this.filterBrand.bind(this)}>
                        <input ref={e => this.input = e} type="checkbox" className="checkbox__input" value={this.props.data} />
                        <span className="checkbox"></span>
                        {this.props.data}
                    </label>
                </li>

        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Item);