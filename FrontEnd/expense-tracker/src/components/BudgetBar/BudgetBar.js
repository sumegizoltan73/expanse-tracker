import React from 'react';
import BudgetItem from '../BudgetItem/BudgetItem';
import './BudgetBar.css';

const BudgetBar = (props) => {
    return (
        <div className="budget-bar">
            <hr />
            <div className="row">
                <BudgetItem title="Budget" text={props.budget.toLocaleString('en-US').replace(/,/g, '.')} />
                <BudgetItem title="Remaining" text={props.remaining.toLocaleString('en-US').replace(/,/g, '.')} />
                <BudgetItem title="Spent so far" text={props.spent.toLocaleString('en-US').replace(/,/g, '.')} />  
            </div>
            <hr />   
        </div>
    );
};

export default BudgetBar;