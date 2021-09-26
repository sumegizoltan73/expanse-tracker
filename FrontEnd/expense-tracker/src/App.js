import React, {useState, useEffect} from 'react';
import './App.css';
import BudgetBar from './components/BudgetBar/BudgetBar';
import CashFlow from './components/CashFlow/CashFlow';
import List from './components/List/List';
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TRANSACTION, DELETE_TRANSACTION } from "./GraphQL/Mutation";
import { getALL } from "./GraphQL/Query";

function App() {
  const [radioState, setRadioState] = useState('expenses');
  const [transactionState, setTransactionState] = useState({
    name: '',
    amount: '',
    type: ''
  });
  const [dataState, setDataState] = useState([]);
  const [errorState, setErrorState] = useState('');
  const { loading, error, data } = useQuery(getALL);
  const [createTransaction, { err }] = useMutation(CREATE_TRANSACTION);
  const [deleteTransaction, { errr }] = useMutation(DELETE_TRANSACTION);

  useEffect(() => {
    if (!loading) {
      setDataState(data.getAll);
    }
  }, [loading, data]);
  
  const handleCashFlowInputChange = (event) => {
    let { name, value } = event.target;
    setTransactionState({ ...transactionState, [name]: value });
  };

  const handleRadioChange = (event) => {
    setRadioState(event.target.id);
  };

  const handleDelete = (id) => {
    deleteTransaction({
      variables: {
        id: id,
      },
    })
    .then(() => {
      const arr = dataState.filter(item => item.id !== id );
      setDataState(arr);
    });
  };

  const handleTransaction = (type) => {
    if (!transactionState.name || !transactionState.amount) {
      setErrorState('Please input all input fields!');
    }
    else {
      setErrorState('');
      createTransaction({
        variables: {
          name: transactionState.name,
          amount: parseInt(transactionState.amount),
          type: type
        },
      }).then(data => {
        setDataState([...dataState, data.data.createTransaction]);
        setTransactionState({
          name: '',
          amount: '',
          type: ''
        });
      });
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
        <List items={dataState} selected={radioState} changeRadio={handleRadioChange} delete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
