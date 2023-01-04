import * as ActionTypes from './ActionTypes';

export const SingleUser = (state = {
    isLoading:false,
    errmess:null,
    dat:{}
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_SINGLE_USER:
            return{...state, dat:action.payload}

        case ActionTypes.GET_SINGLE_USER_LOADING:
            return{...state, isLoading:action.payload}

        case ActionTypes.GET_SINGLE_USER_FAILED:
            return{...state,  errmess:action.payload, dat:{}}
            
        default:
          return state;
      }
};