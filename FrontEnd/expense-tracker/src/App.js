import './App.css';
import BudgetBar from './components/BudgetBar/BudgetBar';
import CashFlow from './components/CashFlow/CashFlow';

function App() {
  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <BudgetBar />
      <div className="row">
        <CashFlow />
      </div>
    </div>
  );
}

export default App;
