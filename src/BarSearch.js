import React, { Component } from 'react';
import InputBar from './InputBar.js';
import BarList from './BarList.js';

class BarSearch extends Component {
    render(){
        let barValues = this.props.barValues;
        return(
            <div className="BarSearch">
                <InputBar />
                <BarList barValues={barValues}/>
            </div>
        );
    }
}

export default BarSearch;