import React, { Component } from 'react';

import "./Button.css";




export default class Button extends Component {
    render() {
        return(
            <button className='cont'>{this.props.text}</button>
        )
    }
    }
{/*
   handleCount = () => {
       /* this.setState(prevState => ({count: prevState.count + 1}))
   }

   render () {
    return  (<button className ="cont" onClick={this.handleCount}>{this.props.text}-{this.props.text2}-----{this.state.count}</button>)
    }
   

        

        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })

        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (<button className ="cont"> </button>)
    }

*/}