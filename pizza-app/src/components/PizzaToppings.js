import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectToppings } from '../actions/pizza'


class PizzaToppings extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.selectToppingsAction(e.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    setCheck(name) {
        let check = false
        this.props.pickedToppings.forEach(topping => {
            if (topping.name === name) {
                check = true
            }
        })
        return check
    }

    render() {
        return (
            this.props.data.map(topping => {
                const { name, id, price } = topping
                return (
                    <label key={`${name}${id}`}>
                        <input
                            type="checkbox"
                            value={name}
                            checked={this.setCheck(name)}
                            onChange={this.handleChange}
                        />
                        Name: {name} Price: {price.toFixed(2)}
                    </label>
                )
            })
        )
    }
}

const mapStateToProps = ({ pickPizza }) => ({
    pickedToppings: pickPizza.pizzaToppings
})

const mapDispatchToProps = dispatch => ({
    selectToppingsAction: (value) => dispatch(selectToppings(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PizzaToppings);