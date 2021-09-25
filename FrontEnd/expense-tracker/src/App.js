import React, {useEffect} from 'react';
import './App.css';
import BudgetBar from './components/BudgetBar/BudgetBar';
import CashFlow from './components/CashFlow/CashFlow';
import List from './components/List/List';
import {useDispatch, useSelector} from 'react-redux';
import { loadUsers } from './redux/actions';

function App() {
  let dispatch = useDispatch();
  
  const { users } = useSelector(state => state.users );

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <BudgetBar />
      <div className="row">
        <CashFlow />
        <List items={users}/>
      </div>
    </div>
  );
}

export default App;
