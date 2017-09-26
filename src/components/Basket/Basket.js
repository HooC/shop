import React, {Component} from 'react';


class Basket extends Component {
    render(){
        return (
            <div>
                <h1>Basket</h1>

                <table className="basket-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Delete</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Basket;
