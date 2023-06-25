import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Project3Class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isValue: '',
            ok: ''
        }
    }

    handleValue = (e) => {
        this.setState({ isValue: e.target.value })
    }

    handleOk = (e) => {
        if (this.state.isValue.length === 3) {
            this.setState({ ok: this.state.isValue })
        }

    }



    render() {
        return (
            <div>
                <Link to="/project3">
                    <button>func status code</button>
                </Link>
                <div>
                    <input onChange={this.handleValue} />
                    <button onClick={this.handleOk}>OK</button>

                </div>
                <div>
                    {this.state.ok && this.state.isValue.length === 3 && <img src={`https://http.cat/${this.state.ok}`} />}
                </div>

            </div>
        )
    }
}
