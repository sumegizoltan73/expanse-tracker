import React from 'react';
import './CashFlow.css';

const CashFlow = (props) => {
    return (
        <div className="col-12 col-md-4 cash-flow">
            <h2>Cash flow</h2>
            <div className="input-group" >
                <label>
                    Name
                    <input type="text" id="cash-flow-name" className="form-control" placeholder="e.g.: Shopping" />
                </label>
            </div>
            <div className="cash-flow-actions">
                <label>Amount</label>
                <div className="input-group" >
                    <button className="btn btn-primary btn-income" type="button" 
                        onClick={() => props.click('income')} >
                        INCOME
                    </button>
                    <input type="text" id="cash-flow-amount" className="form-control" placeholder="3000" />
                    <button className="btn btn-primary btn-expense" type="button" 
                        onClick={() => props.click('expense')} >
                        EXPENSE
                    </button>
                </div>
            </div>
            
        </div>
        
    );
};

export default CashFlow;