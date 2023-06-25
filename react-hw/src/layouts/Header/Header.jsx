import React, { Component } from 'react';


export default class Header extends Component {


    render() {
        const { description } = config
        return (
            <Header>
                    <div className="logo-gap"><Logo logo="https://www.metacritic.com/images/icons/metacritic-icon.svg" /></div>
                    <div className="btn-gap"><ButtonHeaderFunc /></div>
            </Header>
        )
    }
}