import React from 'react';
import BudgetItem from '../BudgetItem/BudgetItem';
import './BudgetBar.css';

const BudgetBar = (props) => {
    return (
        <div className="budget-bar">
            <hr />
            <div className="row">
                <BudgetItem title="Budget" text="450.000" />
                <BudgetItem title="Remaining" text="344.000" />
                <BudgetItem title="Spent so far" text="106.000" />  
            </div>
            <hr />   
        </div>
    );
};

export default BudgetBar;