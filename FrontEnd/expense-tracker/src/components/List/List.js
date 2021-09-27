import React from 'react';
import './List.css';

const List = (props) => {
    const getAmountClasses = (type) => {
        const classes = ['badge', 'rounded-pill', 'bg-success'];

        if (type === 'expense') {
            classes.push('amount-expense');
        }

        return classes.join(' ');
    };

    return (
        <div className="col-12 col-md-8 tracker-list">
            <div className="row">
                <div className="col-12 col-xxl-6">
                    <div className="btn-group tracker-list-radio" role="group">
                        <input type="radio" className="btn-check" name="btnradio" id="expenses" autoComplete="off" 
                            checked={props.selected === 'expenses'} 
                            onChange={props.changeRadio} />
                        <label className="btn btn-outline-dark" htmlFor="expenses">EXPENSES</label>

                        <input type="radio" className="btn-check" name="btnradio" id="incomes" autoComplete="off" 
                            checked={props.selected === 'incomes'} 
                            onChange={props.changeRadio} />
                        <label className="btn btn-outline-dark" htmlFor="incomes">INCOMES</label>

                        <input type="radio" className="btn-check" name="btnradio" id="all" autoComplete="off" 
                            checked={props.selected === 'all'} 
                            onChange={props.changeRadio} />
                        <label className="btn btn-outline-dark" htmlFor="all">ALL</label>
                    </div>
                </div>
                <div className="col-12 col-xxl-6">
                    <div className="input-group" >
                        <input type="text" className="form-control" placeholder="Type to search"
                            onChange={props.changeFilter} />
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="row bg-dark tracker-list-card most-expensive-card">
                        <div className="col-12 col-xxl-6 label">Most expensive action ever</div>
                        <div className="col-12 col-xxl-6 item">
                            {
                                props.mostExpensive.name && 
                                `${props.mostExpensive.name}: ${props.mostExpensive.amount.toLocaleString('en-US').replace(/,/g, '.')}, HUF`
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="row bg-dark tracker-list-card top3-card">
                        <div className="col-12 label">Top 3 expenses</div>
                        {props.top3 && props.top3.map((item, i) => (
                            <div className="col-12 col-xxl-4 item" key={item.id}>
                                {
                                    `${i + 1}. ${item.name}: ${item.amount.toLocaleString('en-US').replace(/,/g, '.')}, HUF`
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="list-group tracker-list-details">
                        {props.items && props.items.map(item => (
                            <div className="list-group-item list-group-item-action" key={item.id} >
                                <span className={getAmountClasses(item.type)}>{item.amount.toLocaleString('en-US').replace(/,/g, '.')} HUF</span>
                                <button className="bg-dark" onClick={() => props.delete(item.id)}>X</button>
                                <div className="inline left">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default List;