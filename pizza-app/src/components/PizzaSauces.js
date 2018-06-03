import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// import {pickPizza} from '../reducers/index'

class PizzaSauce extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pickedSauce: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            pickedSauce: e.target.value
        })
        setTimeout(() => {
            this.props.callbackSauce(this.state.pickedSauce)
        }, 10) //hacky way voor het werken van de eerste klik. refactoren naar betere promiss? 
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        const { pickedSauce } = this.state
        return (
            this.props.data.map(PizzaSauce => {
                const {name, id, price} = PizzaSauce;
                return (
                    <label>
                        <input
                            key={name + id}
                            type="radio"
                            value={name}
                            checked={pickedSauce === name}
                            onChange={this.handleChange}
                        />
                        Name: {name} Price: {price}
                    </label>
                )
            })
        )
    }
}

//proberen om deze state naar de redux state te krijgen. 

export default PizzaSauce