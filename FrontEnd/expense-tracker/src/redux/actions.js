import * as types from './actionType';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
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