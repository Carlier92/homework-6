
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaPrice extends PureComponent {

    // calculatePrice = (pizza) => {
    //     return pizza.reduce((a, b) => a + b, 0)
    // }

    render() {

        return (
            <div>
                <h2>Total Price:</h2>
                {/* <p className="total">Total price: {this.calculatePrice(this.props.totalPrice)}</p> */}
            </div>
        )
    }
}

const mapStateToProps = ({ pickPizza }) => ({
    pizza: pickPizza
})

export default connect(mapStateToProps)(PizzaPrice)