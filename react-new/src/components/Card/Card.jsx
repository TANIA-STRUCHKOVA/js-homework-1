import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    const {title, genre, desc, poster} = this.props
    return (
      <div className = 'card'>
        <p>{title}</p>
        <p>{genre}</p>
        <p>{desc}</p>
        <div><img src={poster} /></div>
      </div>
    )
  }
}


