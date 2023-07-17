import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
                <h3>Number:</h3>
                <div>{this.props.number}</div>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
        number: state.number,
    }
}
export default connect(mapStateToProps)(Number);