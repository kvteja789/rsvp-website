
export const SAVE_RSVP_USERS = "SAVE_RSVP_USERS";


export const saveRSVPUsers = (users) => {
    return {type: SAVE_RSVP_USERS, payload: users}
   }