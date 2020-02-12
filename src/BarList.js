import React, { Component } from 'react';
import NameBar from './NameBar.js';
import './BarList.css';

class BarList extends Component {
    render(){
        let barValues = this.props.barValues;
        let maxValue = this.findMaxStrength(barValues);
        let listItems = barValues.map(e => <li key={e.key}><NameBar name={e.name} strength={e.strength} bounder={maxValue}/></li>)
        return(
            <div className="BarList">
                {listItems}
            </div>
        );
    }

    findMaxStrength(dictList){
        let maxValue = -1;
        dictList.forEach(function(e, i) {
            if (e.strength > maxValue){
                maxValue = e.strength;
            }
        });

        return maxValue;
    }
}

export default BarList;