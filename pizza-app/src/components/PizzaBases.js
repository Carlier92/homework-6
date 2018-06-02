import React, { PureComponent } from 'react'

class PizzaBases extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert(`You chose the ${this.state.size} pizza.`);
    }

    render() {
        
        return (
            this.props.data.map(pizzaBases => {
                return (<label>
                    <input
                        type="radio"
                        value={this.state.value}
                        checked={this.state.value === pizzaBases.name} //actions toevoegen en daar de onclick doen??
                        onChange={this.handleChange}
                    />
                    Name: {pizzaBases.name} Size: {pizzaBases.size} Price: {pizzaBases.price}
                </label>)
            })
        )
    }
}

export default PizzaBases