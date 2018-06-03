import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

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
        this.setState({
            pickedBase: e.target.value
        })
        setTimeout(() => {
            this.props.callbackBase(this.state.pickedBase)
        }, 10) //hacky way voor het werken van de eerste klik. refactoren naar betere promiss? 
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
                            checked={pickedBase === name}
                            onChange={this.handleChange}
                        />
                        Name: {name} Size: {size} Price: {price}
                    </label>
                )
            })
        )
    }
}

export default PizzaBases

//proberen om deze state naar de redux state te krijgen. 