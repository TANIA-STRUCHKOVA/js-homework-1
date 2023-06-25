import React, { Component } from 'react'

export default class TwoWayBinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            age: '',
        }
    }

    handleValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div>
                <div><input onChange={this.handleValue} name="firstName" value={this.state.firstName} />name</div>
                <div><input onChange={this.handleValue} name="age" value={this.state.age} />age</div>
                <p>{this.state.firstName}</p>
                <p>{this.state.age}</p>
            </div>
        )
    }
}
