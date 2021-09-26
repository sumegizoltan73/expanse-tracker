import * as types from './actionType';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userDeleted = () => ({
    type: types.DELETE_USERS
});

export const loadUsers = () => {
    return function (dispatch) {
        fetch(process.env.REACT_APP_API, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getUsers(data));
            })
            .catch(error => {
                console.log('fetch error');
                console.log(error);
            });
    };
};

export const deleteUser = (id) => {
    return function (dispatch) {
        fetch(process.env.REACT_APP_API_DELETE + id, {
            method: 'DELETE',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(userDeleted());
                dispatch(loadUsers());
            })
            .catch(error => {
                console.log('fetch error');
                console.log(error);
            });
    };
};