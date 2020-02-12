import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {
    render(){
        let { strength, bounder } = this.props;
        let lengthStyle = {
            width: (Math.floor(strength/bounder) * 100) + '%'
        };
        return(
            <div className="Bar" style={lengthStyle}></div>
        );
    }
}

export default Bar;