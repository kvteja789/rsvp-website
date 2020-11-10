import { SAVE_RSVP_USERS } from '../Actions'

const initialState = {
   rsvpUsers: [],
}
const rsvpReducer = function(
   state=initialState,   
   action
){
   switch(action.type){
     case SAVE_RSVP_USERS:
       return Object.assign({}, state, {rsvpUsers: action.payload})
     default: return state;
   }
}
export {rsvpReducer};