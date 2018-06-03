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

    handleChange(name) {
        this.setState({
            pickedSauce: name
        })
        setTimeout(() => {
            this.props.callback(this.state.pickedSauce)
        }, 10) //hacky way voor het werken van de eerste klik. refactoren naar betere promiss? 
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        const { pickedSauce } = this.state
        return (
            this.props.data.map(PizzaSauce => {
                const {name, id, size, price} = PizzaSauce;
                return (<label>
                    <input
                        key={name + id}
                        type="radio"
                        value={pickedSauce}
                        checked={pickedSauce === name}
                        onChange={() => this.handleChange(name)}
                    />
                    Name: {name} Price: {price}
                </label>)
            })
        )
    }
}

//proberen om deze state naar de redux state te krijgen. 

export default PizzaSauce