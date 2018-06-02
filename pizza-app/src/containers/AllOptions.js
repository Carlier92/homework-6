import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bases, sauces, toppings} from '../data/pizza-options'
import PizzaBases from '../components/PizzaBases'
import PizzaSauces from '../components/PizzaSauces'

class AllOptions extends PureComponent {

    render() {
        
        return (
            <form>
                <PizzaBases data={bases} />
                <PizzaSauces data={sauces} />
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