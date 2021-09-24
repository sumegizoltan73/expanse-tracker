import React from 'react';
import './BudgetItem.css';

const BudgetItem = (props) => {
    const classes = ['budget-item'];
    const getClassName = () => {
        if (props.title.startsWith('Budget')) {
            classes.push('budget');
        }
        else if (props.title.startsWith('Remaining')) {
            classes.push('remaining');
        }
        else {
            classes.push('spent');
        }

        return classes.join(' ');
    };

    return (
        <div className="col-12 col-md-4">
            <div className={getClassName()}>
                <div className="center">
                    <div className="left">{props.title}</div>
                    <div className="content">{props.text} HUF</div>
                </div>
            </div>           
        </div>
    );
};

export default BudgetItem;