import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.store.find(item => item.id === Number(ownProps.match.params.id))
    };
}

class ItemProduct extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                {this.props.item.price}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ItemProduct);