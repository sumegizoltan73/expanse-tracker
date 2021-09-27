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
  const [filterState, setFilterState] = useState('');
  const [transactionState, setTransactionState] = useState({
    name: '',
    amount: '',
    type: ''
  });
  const [budgetState, setBudgetState] = useState({
    budget: 0,
    remaining: 0,
    spent: 0
  });
  const [mostExpensiveState, setMostExpensiveState] = useState({
    name: '',
    amount: 0
  });
  const [top3State, setTop3State] = useState([]);
  const [dataState, setDataState] = useState([]);
  const [errorState, setErrorState] = useState('');
  const { loading, data } = useQuery(getALL);
  const [createTransaction] = useMutation(CREATE_TRANSACTION);
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION);
  const { budget, remaining, spent } = budgetState;

  useEffect(() => {
    if (!loading) {
      setDataState(data.getAll);
    }
  }, [loading, data]);

  useEffect(() => {
    const sumFiltered = (type) => {
      const arr = dataState.filter(item => item.type === type );
      if (arr.length > 0) {
        return arr.reduce((prev, curr) => prev + curr.amount, 0);
      }
      else {
        return 0;
      }
    };
    const bud = sumFiltered('income');
    const sp = sumFiltered('expense');

    setBudgetState({
      budget: bud,
      remaining: bud-sp,
      spent: sp
    });
  }, [dataState]);

  useEffect(() => {
    const arr = dataState.filter(item => item.type === 'expense' );
    arr.sort(function (a, b) {
      return b.amount - a.amount;
    });
    const { name, amount } = (arr.length > 0) ? arr[0] : { name: '', amount: 0 }; 

    setMostExpensiveState({
      name: name,
      amount: amount
    });
  }, [dataState]);

  useEffect(() => {
    const arr = dataState.filter(item => item.type === 'expense' );
    arr.sort(function (a, b) {
      return b.amount - a.amount;
    });

    setTop3State(arr.slice(0,3));
  }, [dataState]);

  const handleCashFlowInputChange = (event) => {
    let { name, value } = event.target;
    setTransactionState({ ...transactionState, [name]: value });
  };

  const handleRadioChange = (event) => {
    setRadioState(event.target.id);
  };

  const handleFilterChange = (event) => {
    setFilterState(event.target.value);
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
    if (!transactionState.name || !transactionState.amount || transactionState.amount < 1) {
      setErrorState('Please input all input fields!');
    }
    else {
      setErrorState('');
      createTransaction({
        variables: {
          name: transactionState.name,
          amount: Math.floor(transactionState.amount),
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

  const predicateFn = (item) => {
    let types = [];
    switch (radioState) {
      case 'incomes':
        types.push('income');
        break;
      case 'expenses':
        types.push('expense');
        break;
      default:
        types.push('income');
        types.push('expense');
        break;
    }

    return types.includes(item.type) && (item.name.startsWith(filterState) || !filterState);
  };

  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <BudgetBar 
        budget={budget}
        remaining={remaining}
        spent={spent}
      />
      <div className="row">
        <CashFlow 
          click={handleTransaction} 
          change={handleCashFlowInputChange} 
          transaction={transactionState} 
          error={errorState}
          chartData={[budget, remaining, spent]}
        />
        <List 
          items={dataState.filter(predicateFn)} 
          mostExpensive={mostExpensiveState}
          top3={top3State}
          selected={radioState} 
          changeRadio={handleRadioChange} 
          changeFilter={handleFilterChange}
          delete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default App;
