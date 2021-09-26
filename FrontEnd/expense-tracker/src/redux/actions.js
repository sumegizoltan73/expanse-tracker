import * as types from './actionType';
import useTransactionList from '../GraphQL/Query';

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

export const loadUsers = (data) => {

    return function (dispatch) {
        dispatch(getUsers(data.getALL));
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

export const addUser = (transaction, setStateFn) => {
    return function (dispatch) {
        fetch(`https://${process.env.REACT_APP_API_ADD}`, {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
            .then(res => res.json())
            .then(data => {
                setStateFn({
                    name: '',
                    username: '',
                    type: ''
                });

                dispatch(userAdded());
                dispatch(loadUsers());
            })
            .catch(error => {
                console.log('fetch error');
                console.log(error);
            });
    };
};