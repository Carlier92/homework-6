import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { droneDeliverey } from '../actions/pizza'

class DroneDelivery extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.droneDelivereyAction(!this.props.delivery)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    value={this.props.delivery}
                    onChange={this.handleChange}
                />
                Drone delivery yo
            </label>
        )
    }
}

const mapStateToProps = ({ pickPizza, calculatePrice }) => ({
    pickedPizza: pickPizza,
    delivery: pickPizza.droneUpgrade

})

const mapDispatchToProps = dispatch => ({
    droneDelivereyAction: (value) => dispatch(droneDeliverey(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(DroneDelivery);
