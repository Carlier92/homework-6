import React, { PureComponent } from 'react'

class PizzaSauces extends PureComponent {
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
            this.props.data.map(PizzaSauces => {
                return (<label>
                    <input
                        type="radio"
                        value={this.state.value}
                        checked={this.state.value === PizzaSauces.name}
                        onChange={this.handleChange}
                    />
                    Name: {PizzaSauces.name} Price: {PizzaSauces.price}
                </label>)
            })
        )
    }
}

export default PizzaSauces