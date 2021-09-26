import React, {useState, useEffect} from 'react';
import './App.css';
import BudgetBar from './components/BudgetBar/BudgetBar';
import CashFlow from './components/CashFlow/CashFlow';
import List from './components/List/List';
import {useDispatch, useSelector} from 'react-redux';
import { addUser, deleteUser, loadUsers } from './redux/actions';

function App() {
  const [radioState, setRadioState] = useState('expenses');
  
  const [transactionState, setTransactionState] = useState({
    name: '',
    username: '',
    type: ''
  });

  const [errorState, setErrorState] = useState('');

  let dispatch = useDispatch();
  
  const { users } = useSelector(state => state.users );

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  
  const handleCashFlowInputChange = (event) => {
    let { name, value } = event.target;
    setTransactionState({ ...transactionState, [name]: value });
  };

  const handleRadioChange = (event) => {
    setRadioState(event.target.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleTransaction = (type) => {
    if (!transactionState.name || !transactionState.username) {
      setErrorState('Please input all input fields!');
    }
    else {
      setErrorState('');
      dispatch(addUser(transactionState, setTransactionState));
    }
  };

  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <BudgetBar />
      <div className="row">
        <CashFlow 
          click={handleTransaction} 
          change={handleCashFlowInputChange} 
          transaction={transactionState} 
          error={errorState}
        />
        <List items={users} selected={radioState} changeRadio={handleRadioChange} delete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
