import React, { Component } from "react";
import { connect } from "react-redux";

class String extends Component {
    state = {};
    handleAdd = () => {
        return this.props.add(10);
    }

    handleSub = () => {
        return this.props.sub(5);
    }
    render() {
        return (
            <React.Fragment>
                <h3>String:</h3>
                <div>{this.props.string}</div>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleSub}>Sub</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        string: state.string,
    };
};

const mapDispatchToProps = {
    add: (x) => {
        return { type: "add", value: x };
    },
    sub: (x) => {
        return { type: "sub", value: x };
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(String);
