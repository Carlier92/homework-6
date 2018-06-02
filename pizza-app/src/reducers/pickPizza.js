export default (state = [], { type, payload } = {}) => {
    
    switch (type) {
        case 'ADD_BASE':
            return state.push(payload)
        case 'REMOVE_BASE':
            return state
    default:
      return state
    }
  }


