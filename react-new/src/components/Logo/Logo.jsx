import React, { Component } from "react";

export default class Logo extends Component {
    render() {
        return (
        <div> 
            <img width="50" src={this.props.logo} />
            </div>
            )
    }
}

