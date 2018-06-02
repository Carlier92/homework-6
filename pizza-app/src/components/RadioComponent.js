import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class RadioComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            size: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert(`You chose the ${this.state.size} pizza.`);
    }

    render() {
        
        return (
            this.props.data.map(item => {
                return (<label>
                    <input
                        type="radio"
                        // value="small"
                        // checked={this.state.size === "small"}
                        onChange={this.handleChange}
                    />
                    {item.name}
                </label>)
            })
        )
    }
}

// const mapStateToProps = ({ selectedWord, lettersGuessed }) => {
//     return {
//         hiddenWord: showGuess(selectedWord, lettersGuessed),
//     }
// }

export default RadioComponent