import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS } from '../actions/types'

export default (state = [], { type, payload } = {}) => {
    switch (type) {
        case ADD_BASE :
            return state.concat(payload)

        case ADD_SAUCE :
            return state.concat(payload)

        case ADD_TOPPINGS :
            return state.concat(payload)

        default:
            return state
    }
}
