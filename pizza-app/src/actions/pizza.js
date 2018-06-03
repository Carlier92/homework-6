import { ADD_BASE, ADD_SAUCE, ADD_TOPPINGS } from './types'

export const selectBase = (base) => {
  return {
    type: ADD_BASE,
    payload: base
  }
}

export const selectSauce = (sauce) => {
  return {
    type: ADD_SAUCE,
    payload: sauce
  }
}

export const selectToppings = (toppings) => {
  return {
    type: ADD_TOPPINGS,
    payload: toppings
  }
}


