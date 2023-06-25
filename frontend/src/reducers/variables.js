import { CHANGE_VARIABLE } from "../actions/type"
const INITIAL_STATE = {
    items_array:null,
    test:"this is str",
    notification:"",
    notification_flag:false,
    message:"",
}

const reducers = (state=INITIAL_STATE,action)=>{
    switch (action.type) {

        case CHANGE_VARIABLE:
      		return {...state, [ action.payload.key]: action.payload.value }
        default:
            return state

    }
}
export default reducers