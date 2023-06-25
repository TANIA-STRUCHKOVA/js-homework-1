import React, { Component, Fragment } from 'react'
import { cards } from '../../constants/cards'
import Card from '../../components/Card/Card'
import "./CardsCont.css"

export default class CardsCont extends Component {
    render() {
        return (
            <div className='card-wrapper'>{cards.map(card => {
                return <Fragment key={card.id}><Card title={card.name} genre={card.genre} desc={card.desc} poster={card.imageUrl} /></Fragment>
            })}</div>
        )
    }
}
