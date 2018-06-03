import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings } from '../data/pizza-options'
import PizzaBases from '../components/PizzaBases'
import PizzaSauces from '../components/PizzaSauces'
import PizzaToppings from '../components/PizzaToppings'
import PizzaPrice from '../components/PizzaPrice'
import DroneDelivery from '../components/DroneDelivery'

class AllOptions extends PureComponent {
    render() {
        return (
            <form>
                <ul className="form-list">
                    <p>Choose your Base:</p>
                    <li className="bases">
                        <PizzaBases data={bases} />
                    </li>

                    <p>Choose your Sauce:</p>
                    <li className="sauces">
                        <PizzaSauces data={sauces} />
                    </li>

                    <p>Choose your Toppings:</p>
                    <li className="toppings">
                        <PizzaToppings data={toppings} />
                    </li>

                    <p>Can't wait, and wanna be cool?</p>
                    <li className="delivery">
                        <DroneDelivery />
                    </li>

                    <li className="price">
                        <PizzaPrice />
                    </li>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = ({ pickPizza }) => {
    return {
        selected: pickPizza
    }
}

export default connect(mapStateToProps)(AllOptions)