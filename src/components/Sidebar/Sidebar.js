import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

const mapStateToProps = (state) => {
    return {
        state: state.brands
    }
}

class Sidebar extends Component {


    render() {
        return(
            <section className="sidebar">
                <h3 className="sidebar__title">Brands</h3>

                <ul className="brand-filter">
                    {this.props.state.map((item, index) => 
                        <Item key={index} data={item}/>
                    )}
                </ul>
            </section>
        )
    }
}

export default connect(mapStateToProps)(Sidebar);