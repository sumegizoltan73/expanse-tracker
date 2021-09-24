import React from 'react';
import './CashFlow.css';

const CashFlow = (props) => {
    return (
        <div className="col-12 col-md-4 cash-flow">
            <h2>Cash flow</h2>
            <div class="input-group" >
                <label>
                    Name
                    <input type="text" class="form-control" placeholder="e.g.: Shopping" />
                </label>
            </div>
            <div className="cash-flow-actions">
                <label>Amount</label>
                <div class="input-group" >
                    <button class="btn btn-primary btn-income" type="button" id="button-addon1">INCOME</button>
                    <input type="text" class="form-control" placeholder="3000" />
                    <button class="btn btn-primary btn-expense" type="button" id="button-addon1">EXPENSE</button>
                </div>
            </div>
            
        </div>
        
    );
};

export default CashFlow;