import React, { Component } from 'react';
import InputBar from './InputBar.js';
import BarList from './BarList.js';

class BarSearch extends Component {
    render(){
        let barValues = [
            {key:1, name:'Jack', strength:10},
            {key:2, name:'Jill', strength:5},
            {key:3, name:'John', strength:7},
            {key:4, name:'Kassem', strength:3}
        ];
        return(
            <div className="BarSearch">
                <InputBar />
                <BarList barValues={barValues}/>
            </div>
        );
    }
}

export default BarSearch;