import { combineReducers } from 'redux';
import { rsvpReducer } from './RSVPReducer';


const appReducer = combineReducers({
  rsvpRegistered: rsvpReducer,
});

export default appReducer;