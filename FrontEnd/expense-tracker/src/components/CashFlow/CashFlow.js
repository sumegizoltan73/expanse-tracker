import React from 'react';
import DoughnutChart from '../Chart/Chart';
import './CashFlow.css';

const CashFlow = (props) => {
    return (
        <div className="col-12 col-md-4 cash-flow">
            <h2>Cash flow</h2>
            {props.error && <h3 style={{color: "red"}} >{props.error}</h3>}
            <div className="input-group" >
                <label>
                    Name
                    <input type="text" name="name" className="form-control" placeholder="e.g.: Shopping" 
                        value={props.transaction.name} onChange={props.change} />
                </label>
            </div>
            <div className="cash-flow-actions">
                <label>Amount</label>
                <div className="input-group" >
                    <button className="btn btn-primary btn-income" type="button" 
                        onClick={() => props.click('income')} >
                        INCOME
                    </button>
                    <input type="number" name="amount" className="form-control" placeholder="3000" 
                        value={props.transaction.amount} onChange={props.change} />
                    <button className="btn btn-primary btn-expense" type="button" 
                        onClick={() => props.click('expense')} >
                        EXPENSE
                    </button>
                </div>
            </div>
            
            <DoughnutChart chartData={props.chartData}/>
        </div>
        
    );
};

export default CashFlow;