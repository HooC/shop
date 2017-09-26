import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
                {/* <li className="menu__item"><Link className="menu__link" to="/catalog">Catalog</Link></li> */}
                <li className="menu__item"><Link className="menu__link" to="/basket">Basket</Link></li>
            </ul>
        )
    }
}

export default Menu;