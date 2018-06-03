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
        this.callback = this.callback.bind(this)
    }
    callback(childState) {
        this.setState({
            pickedBase: childState,
            pickedSauce: childState
        })
    }

    render() {
        console.log(this.state.pickedBase);
        
        return (
            <form>
                <PizzaBases callback={this.callback} data={bases} />
                <PizzaSauces callback={this.callback} data={sauces} />
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