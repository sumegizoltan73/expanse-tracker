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

    return (
        <div className="col-12 col-md-8 tracker-list">
            <div className="row">
                <div className="col-12 col-xxl-6">
                    <div className="btn-group" role="group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" 
                            checked={radioState.selected === 'btnradio1'} 
                            onChange={handleRadioChange} />
                        <label className="btn btn-outline-dark" for="btnradio1">EXPENSES</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" 
                            checked={radioState.selected === 'btnradio2'} 
                            onChange={handleRadioChange} />
                        <label className="btn btn-outline-dark" for="btnradio2">INCOMES</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" 
                            checked={radioState.selected === 'btnradio3'} 
                            onChange={handleRadioChange} />
                        <label className="btn btn-outline-dark" for="btnradio3">ALL</label>
                    </div>
                </div>
                <div className="col-12 col-xxl-6">
                    <div class="input-group" >
                        <input type="text" class="form-control" placeholder="Type to search" />
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default List;