import React from 'react';
import './index.css';

class MathFact extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "65vw"}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.text}</h5>
            </div>
            </div>
        );
    };
}

export default MathFact;
