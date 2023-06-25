import React, { Component } from 'react'

export default class Project2Class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yesNo: {},
            isReload: false
        }
    }

    componentDidMount() {
        fetch('https://yesno.wtf/api')
            .then(res => res.json())
            .then(data => this.setState({ yesNo: data }))

    }

    componentDidUpdate(_, prevState) {
        if (this.setState.isReload !== prevState.isReload) {
            fetch('https://yesno.wtf/api')
                .then(res => res.json())
                .then(data => this.setState({ yesNo: data }))
        }
    }

    handleReload = () => {
        this.setState({ isReload: !this.state.isReload })
    }

    render() {

        return (
            <div>
                <div><img src={this.state.yesNo.image} /></div>
                <p>{this.state.yesNo.answer}</p>
                <button onClick={this.handleReload}>Reload</button>
            </div>
        )
    }
}
