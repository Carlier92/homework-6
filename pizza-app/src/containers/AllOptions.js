import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bases, sauces, toppings} from '../data/pizza-options'
import PizzaBases from '../components/PizzaBases'
import PizzaSauces from '../components/PizzaSauces'
import PizzaToppings from '../components/PizzaToppings'
import PizzaPrice from '../components/PizzaPrice'
import DroneDelivery from '../components/DroneDelivery'
import { pickPizza } from  '../reducers'

class AllOptions extends PureComponent {
    render() {
        return (
            <form>
                <ul className="form-list">
                    <li className="bases">
                        <PizzaBases  data={bases} />
                    </li>
                    <li className="sauces">
                        <PizzaSauces data={sauces} />
                    </li>

                    <li className="toppings">
                        <PizzaToppings data={toppings} />
                    </li>
                    <li className="delivery">
                        <DroneDelivery />
                    </li>
                    <li className="toppings">
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