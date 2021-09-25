import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import restReducer from './root-reducer';

const middlewares = [reduxThunk];

const store = createStore(restReducer, applyMiddleware(...middlewares));

export default store;
