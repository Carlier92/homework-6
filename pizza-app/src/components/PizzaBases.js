import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectBase } from '../actions/pizza'
import { simpleAction } from '../actions/pizza'

// import {pickPizza} from '../reducers/index'

class PizzaBases extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pickedBase: ""
        }

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
        const { pickedBase } = this.state
        
        return (
            this.props.data.map(pizzaBase => {
                const {name, id, size, price} = pizzaBase;
                return (
                    <label>
                        <input
                            key={name + id}
                            type="radio"
                            value={name}
                            checked={this.props.pickedBase === name}
                            onChange={this.handleChange}
                        />
                        Name: {name} Size: {size} Price: {price}
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

//proberen om deze state naar de redux state te krijgen. 