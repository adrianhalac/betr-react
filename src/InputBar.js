import React, { Component } from 'react';
import './InputBar.css';

class InputBar extends Component {
    render(){
        return(
            <div className="InputBar">
                <input className="InputBar-Input" type="text"></input>
            </div>
        );
    }
}

export default InputBar;