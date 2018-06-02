import { PICK_BASE } from '../actions/pickBase'

export default (state = [], { type, payload } = {}) => {
    switch (type) {
        case PICK_BASE :
            return state.concat(payload)
            
        // case NEW_GAME :
        //     return []
        // default:
        //     return state
    }
}