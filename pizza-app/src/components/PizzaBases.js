import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectBase } from '../actions/pizza'

class PizzaBases extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.selectBaseAction(e.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            this.props.data.map((pizzaBase, index) => {
                const { name, id, size, price } = pizzaBase;

                return (
                    <label key={`${name}${id}`}>
                        <input
                            type="radio"
                            value={name}
                            checked={this.props.pickedBase.name === name}
                            onChange={this.handleChange}
                        />
                        {name} Size: {size} €{price.toFixed(2)}
                    </label>
                )
            })
        )
    }
}

const mapStateToProps = ({ pickPizza }) => ({
    pickedBase: pickPizza.pizzaBase
})

const mapDispatchToProps = dispatch => ({
    selectBaseAction: (value) => dispatch(selectBase(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBases);