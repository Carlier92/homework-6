import { ADD_BASE, REMOVE_BASE } from './types'

export const addBase = (base) => {
  return {
    type: ADD_BASE,
    payload: base
  }
}

export const removeBase = (base) => {
  return {
    type: REMOVE_BASE,
    payload: base
  }
}