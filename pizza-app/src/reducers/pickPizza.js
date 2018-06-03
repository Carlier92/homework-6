import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS } from '../actions/types'
export default (state = {pizzaBase: "", pizzaSauce: "", pizzaToppings: []}, { type, payload } = {}) => {
    
    switch (type) {
        case ADD_BASE :
            return {...state, pizzaBase: payload}

        case ADD_SAUCE :
            return {...state, pizzaBase: payload}

        case ADD_TOPPINGS :
            return state.concat(payload)

        default:
            return state
    }
}
