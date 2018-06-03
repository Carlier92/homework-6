import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bases, sauces, toppings} from '../data/pizza-options'
import PizzaBases from '../components/PizzaBases'
import PizzaSauces from '../components/PizzaSauces'

class AllOptions extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pickedBase: "",
            pickedSauce: ""
        }
        this.callbackBase = this.callbackBase.bind(this)
        this.callbackSauce = this.callbackSauce.bind(this)

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

    render() {
        console.log(this.state);
        
        return (
            <form>
                <PizzaBases callbackBase={this.callbackBase} data={bases} />
                <PizzaSauces callbackSauce={this.callbackSauce} data={sauces} />
                {/* <CheckBoxComponent data={pizzaToppings} /> */}
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