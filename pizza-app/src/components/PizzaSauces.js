import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSauce } from '../actions/pizza'

class PizzaSauces extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pickedSauce: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.selectSauceAction(e.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            this.props.data.map(pizzaSauce => {
                const { name, id, price } = pizzaSauce;
                return (
                    <label key={`${name}${id}`}>
                        <input
                            type="radio"
                            value={name}
                            checked={this.props.pickedSauce.name === name}
                            onChange={this.handleChange}
                        />
                        {name} €{price.toFixed(2)}
                    </label>
                )
            })
        )
    }
}

const mapStateToProps = ({ pickPizza }) => ({
    pickedSauce: pickPizza.pizzaSauce
})

const mapDispatchToProps = dispatch => ({
    selectSauceAction: (value) => dispatch(selectSauce(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSauces);
