import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import { btnHeader } from '../../constants/btnHeader'
import { Link } from 'react-router-dom'


export default class ButtonHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  handleOpen = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <>
        <button onClick={this.handleOpen}>{!this.state.isVisible ? 'Show pages' : 'Hide pages'}</button>

        {this.state.isVisible && btnHeader.map(({ id, value, title }) => {
          return <Link key={id} to={value}><Button text={title} /></Link>
        })}</>
    )
  }
}
