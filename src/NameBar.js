import React, { Component } from 'react';
import Bar from './Bar.js';
import './NameBar.css';

class NameBar extends Component {
    render(){
        let { name, strength, bounder } = this.props;
        return(
            <div className="NameBar">
                <h2 className="NameBar-Name">{name}</h2>
                <Bar className="NameBar-Bar" strength={strength} bounder={bounder}/>
            </div>
        );
    }
}

export default NameBar;