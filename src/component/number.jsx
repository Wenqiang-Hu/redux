import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {
    state = {  } 

    handleConcat = () => {
        this.props.concat("w");
    }

    render() { 
        return (
            <React.Fragment>
                
                <h3>Number:</h3>
                <div>{this.props.number}</div>
                <button onClick={this.handleConcat}>Concat</button>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
        number: state.number,
    }
}

const mapDispatchToProps = {
    concat: (c) => {
        return {
            type: "concat",
            char: c
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Number);