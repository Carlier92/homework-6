import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bases, sauces, toppings} from '../data/pizza-options'
import PizzaBases from '../components/PizzaBases'
import PizzaSauces from '../components/PizzaSauces'
import PizzaToppings from '../components/PizzaToppings'

class AllOptions extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pickedBase: "",
            pickedSauce: "",
            pickedTopping: []
        }
        this.callbackBase = this.callbackBase.bind(this)
        this.callbackSauce = this.callbackSauce.bind(this)
        this.callbackTopping = this.callbackTopping.bind(this)
    }

    callbackBase(childState) {
        this.setState({
            pickedBase: childState
        })
    }

    callbackSauce(childState) {
        this.setState({
            pickedSauce: childState
        })
    }

    callbackTopping(childState) {
        this.setState({
            pickedTopping: childState
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <form>
                <ul className="form-list">
                    <li className="bases">
                        <PizzaBases callbackBase={this.callbackBase} data={bases} />
                    </li>
                    <li className="sauces">
                        <PizzaSauces callbackSauce={this.callbackSauce} data={sauces} />
                    </li>

                    <li className="toppings">
                        <PizzaToppings callbackTopping={this.callbackTopping} data={toppings} />
                    </li>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = ({ bases, sauces, toppings, PizzaBases, PizzaSauces }) => {
    return {
        PizzaBases, 
        PizzaSauces, 
        toppings,
        bases,
        sauces
    }
}

export default connect(mapStateToProps)(AllOptions)