import * as types from './actionType';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userDeleted = () => ({
    type: types.DELETE_USER
});

const userAdded = () => ({
    type: types.ADD_USER
});

export const loadUsers = () => {
    return function (dispatch) {
        fetch(`https://${process.env.REACT_APP_API}`, {
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
        fetch(`https://${process.env.REACT_APP_API_DELETE}/id`, {
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

export const addUser = (name, amount, type) => {
    return function (dispatch) {
        fetch(`https://${process.env.REACT_APP_API_ADD}`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                username: amount
            }),
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
            .then(res => res.json())
            .then(data => {
                document.querySelector('#cash-flow-name').value = '';
                document.querySelector('#cash-flow-amount').value = '';

                dispatch(userAdded());
                dispatch(loadUsers());
            })
            .catch(error => {
                console.log('fetch error');
                console.log(error);
            });
    };
};