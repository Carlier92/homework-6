import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS } from '../actions/types'
export default (state = {pizzaBase: "", pizzaSauce: "", pizzaToppings: []}, { type, payload } = {}) => {
    
    switch (type) {
        case ADD_BASE :
            return { ...state, pizzaBase: payload }

        case ADD_SAUCE :
            return { ...state, pizzaSauce: payload }

        case ADD_TOPPINGS :
            if( state.pizzaToppings.includes( payload ) ) {
                let pizzaToppingsCopy = [...state.pizzaToppings]
                pizzaToppingsCopy.splice( pizzaToppingsCopy.indexOf( payload ), 1 );
                return { ...state, pizzaToppings: pizzaToppingsCopy }
            } else {
                return { ...state, pizzaToppings: state.pizzaToppings.concat( payload ) }
            }

        default:
            return state
    }
}
