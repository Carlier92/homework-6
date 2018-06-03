import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class PizzaToppings extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pickedToppings: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if(this.state.pickedToppings.includes(e.target.value)) {
            let stateCopy = [...this.state.pickedToppings]
            stateCopy.splice(stateCopy.indexOf(e.target.value), 1);
            
            this.setState({
                pickedToppings: stateCopy
            })
        } else {
            this.setState({
                pickedToppings: [e.target.value, ...this.state.pickedToppings]
            })
        }
        
        setTimeout(() => {
            this.props.callbackTopping(this.state.pickedToppings)
        }, 10) //hacky way voor het werken van de eerste klik. refactoren naar betere promiss? 
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        const { pickedToppings } = this.state
        
        return (
            this.props.data.map(topping => {
                const {name, id, price} = topping
                return (
                    <label>
                        <input
                            key={name + id}
                            type="checkbox"
                            value={name}
                            checked={pickedToppings.includes(name)}
                            onChange={this.handleChange}
                        />
                        Name: {name} Price: {price}
                    </label>
                )
            })
        )
    }
}

export default PizzaToppings

//proberen om deze state naar de redux state te krijgen. 