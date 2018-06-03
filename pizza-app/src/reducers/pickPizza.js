import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS, ADD_UPGRADE } from '../actions/types'
import { bases, sauces, toppings } from '../data/pizza-options'
export default (state = { pizzaBase: {}, pizzaSauce: {}, pizzaToppings: [], droneUpgrade: false }, { type, payload } = {}) => {

    switch (type) {
        case ADD_BASE:
            const base = bases.filter(base => base.name.includes(payload))[0]
            delete base.id
            return { ...state, pizzaBase: base }

        case ADD_SAUCE:
            const sauce = sauces.filter(sauce => sauce.name.includes(payload))[0]
            delete sauce.id
            return { ...state, pizzaSauce: sauce }

        case ADD_TOPPINGS:
            const topping = toppings.filter(topping => topping.name.includes(payload))[0]
            delete topping.id

            if (state.pizzaToppings.includes(topping)) {
                let pizzaToppingsCopy = [...state.pizzaToppings]
                pizzaToppingsCopy.splice(pizzaToppingsCopy.indexOf(topping), 1);
                return { ...state, pizzaToppings: pizzaToppingsCopy }
            } else {
                return { ...state, pizzaToppings: state.pizzaToppings.concat(topping) }
            }

        case ADD_UPGRADE:
            return { ...state, droneUpgrade: payload }

        default:
            return state
    }
}
