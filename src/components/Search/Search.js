import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => state;

const mapActionToProps = (dispatch) => {
    return {
        searchValue: (value) => {
            dispatch({
                type: 'ADD_SEARCH',
                payload: value
            })
        },

        clearSearch: () => {
            dispatch({
                type: 'CLEAR_SEARCH'
            })
        }
    }
}

class Search extends Component {
    changeValue() {   
        this.props.searchValue(this.elem.value)
    }
    componentWillUnmount() {
        this.props.clearSearch();
    }

    render() {
        return (
            <form>
                <input ref={i => this.elem = i} className="search" type="text" onChange={this.changeValue.bind(this)} placeholder="Search"/>  
            </form>    
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Search);