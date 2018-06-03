
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaPrice extends PureComponent {

    calculatePrice = () => {
        const {pizzaBase, pizzaSauce, pizzaToppings} = this.props.pizza
        let basePrice = pizzaBase.price || 0.00
        let saucePrice = pizzaSauce.price || 0.00
        let toppingPrice = 0.00
        console.log(pizzaToppings);
        
        pizzaToppings.forEach(topping => {
            toppingPrice = toppingPrice + topping.price
        })

        return ((basePrice + saucePrice + toppingPrice).toFixed(2))
    }

    render() {
        return (
            <div>
                <h2>Total Price:</h2>
                <p className="total">Total price: {this.calculatePrice()}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ pickPizza }) => ({
    pizza: pickPizza
})

export default connect(mapStateToProps)(PizzaPrice)