
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaPrice extends PureComponent {

    calculatePrice = () => {
        const { pizzaBase, pizzaSauce, pizzaToppings, droneUpgrade } = this.props.pizza
        let basePrice = pizzaBase.price || 0.00
        let saucePrice = pizzaSauce.price || 0.00
        let toppingPrice = 0.00

        pizzaToppings.forEach(topping => {
            toppingPrice = toppingPrice + topping.price
        })

        let totalPrice = (basePrice + saucePrice + toppingPrice)

        return droneUpgrade ? (totalPrice + (totalPrice / 10)).toFixed(2) : totalPrice.toFixed(2)
    }

    render() {
        return (
            <div>
                <h2>Total Pizza Price</h2>
                <p className="total">€ {this.calculatePrice()}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ pickPizza }) => ({
    pizza: pickPizza
})

export default connect(mapStateToProps)(PizzaPrice)