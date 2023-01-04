import * as ActionTypes from './ActionTypes';

export const Users = (state = {
    isLoading:true,
    errmess:null,
    dat:{}
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return{...state, dat:action.payload}

        case ActionTypes.GET_USERS_LOADING:
            return{...state, isLoading:action.payload}

        case ActionTypes.GET_USERS_FAILED:
            return{...state,  errmess:action.payload, dat:{}}
            
        default:
          return state;
      }
};