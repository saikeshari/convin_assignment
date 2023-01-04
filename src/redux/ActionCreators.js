import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchUsers = () => (dispatch) => {
    dispatch(UsersLoading(true));

    const headers = {
        'Content-Type':'application/json'
    }

    axios.get('https://reqres.in/api/users', {
        headers:headers
    })
    // .then(response => response.json())
    .then((response) => {
        console.log(response);
        if(response.status === 200)
        {
            dispatch(UsersFetched(response.data));
        }
        else
        {
            dispatch(UsersFailed('Get Users API Failed'));
        }
        setTimeout(() => {
            dispatch(UsersLoading(false));
        }, 750);
    })
}

export const fetchSingleUser = (userNo) => (dispatch) => {
    dispatch(SingleUserLoading(true));

    const headers = {
        'Content-Type':'application/json'
    }

    axios.get(`https://reqres.in/api/users/${userNo}`, {
        headers:headers
    })
    .then((response) => {
        if(response.status === 200)
        {
            dispatch(SingleUserFetched(response.data));
        }
        else
        {
            dispatch(SingleUserFailed('Get Single User API Failed'));
        }
        setTimeout(() => {
            dispatch(SingleUserLoading(false));
        }, 750);
    })
}

export const UsersLoading = (isLoadingvar) => ({
    type: ActionTypes.GET_USERS_LOADING,
    payload: isLoadingvar
});
  
export const UsersFailed = (errmess) => ({
    type: ActionTypes.GET_USERS_FAILED,
    payload: errmess
});
  
export const UsersFetched = (dat) => ({
    type: ActionTypes.GET_USERS,
    payload: dat
});

export const SingleUserLoading = (isLoadingvar) => ({
    type: ActionTypes.GET_SINGLE_USER_LOADING,
    payload: isLoadingvar
});
  
export const SingleUserFailed = (errmess) => ({
    type: ActionTypes.GET_SINGLE_USER_FAILED,
    payload: errmess
});
  
export const SingleUserFetched = (dat) => ({
    type: ActionTypes.GET_SINGLE_USER,
    payload: dat
});

