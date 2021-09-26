import React from 'react';
import './List.css';

const List = (props) => {
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
                        <input type="text" className="form-control" placeholder="Type to search" />
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="row bg-dark tracker-list-card most-expensive-card">
                        <div className="col-12 col-xxl-6 label">Most expensive action ever</div>
                        <div className="col-12 col-xxl-6 item">Grocery: 60.000, HUF</div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="list-group tracker-list-details">
                        {props.items && props.items.map(item => (
                            <div className="list-group-item list-group-item-action" key={item.id} >
                                <span className="badge rounded-pill bg-success">{item.username} HUF</span>
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