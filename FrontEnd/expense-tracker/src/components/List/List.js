import React, {useState} from 'react';
import './List.css';

const List = (props) => {
    const [radioState, setRadioState] = useState({
        selected: 'btnradio1'
    });

    const handleRadioChange = (event) => {
        setRadioState({
            selected: event.target.id
        });
    };

    const onItemDeleteClick = (event) => {
        return null;
    };

    return (
        <div className="col-12 col-md-8 tracker-list">
            <div className="row">
                <div className="col-12 col-xxl-6">
                    <div className="btn-group tracker-list-radio" role="group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" 
                            checked={radioState.selected === 'btnradio1'} 
                            onChange={handleRadioChange} />
                        <label className="btn btn-outline-dark" htmlFor="btnradio1">EXPENSES</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" 
                            checked={radioState.selected === 'btnradio2'} 
                            onChange={handleRadioChange} />
                        <label className="btn btn-outline-dark" htmlFor="btnradio2">INCOMES</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" 
                            checked={radioState.selected === 'btnradio3'} 
                            onChange={handleRadioChange} />
                        <label className="btn btn-outline-dark" htmlFor="btnradio3">ALL</label>
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
                                <button className="bg-dark" onClick={onItemDeleteClick}>X</button>
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