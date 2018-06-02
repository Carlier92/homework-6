import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {pizzaBases, pizzaSauces, pizzaToppings} from '../data/pizza-options'
import RadioComponent from '../components/RadioComponent'

class AllOptions extends PureComponent {

    render() {
        
        return (
            <form>
                <RadioComponent data={pizzaBases} />
                <RadioComponent data={pizzaSauces} />
                {/* <CheckBoxComponent data={pizzaToppings} /> */}
            </form>
        )
    }
}

const mapStateToProps = ({ pizzaBases, pizzaSauces, pizzaToppings, RadioComponent }) => {
    return {
        pizzaBases, 
        pizzaSauces, 
        pizzaToppings,
        RadioComponent
    }
}

export default connect(mapStateToProps)(AllOptions)