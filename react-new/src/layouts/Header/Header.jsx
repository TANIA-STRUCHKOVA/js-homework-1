import { render } from "@testing-library/react";
import React, { Component } from 'react';
import { ContHeader } from './styled';
import { config } from './config';
import Logo from "../../components/Logo/Logo";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import "./Header.css"
import ButtonHeaderFunc from "../ButtonHeader/ButtonHeaderFunc";


export default class Header extends Component {


    render() {
        const { description } = config
        return (
            <ContHeader>
                    <div className="logo-gap"><Logo logo="https://www.metacritic.com/images/icons/metacritic-icon.svg" /></div>
                    <div className="btn-gap"><ButtonHeaderFunc /></div>
            </ContHeader>
        )
    }
}