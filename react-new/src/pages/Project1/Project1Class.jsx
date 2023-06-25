import React, { Component, Fragment } from 'react'
import Card from '../../components/Card/Card';
import { btnPagination } from '../../constants/btnPagination';
import './Project1.css'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

export default class Project1Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: [],
            page: 1
        }
    }
    /////////////////
    fetchData =()=>{ fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`)
    .then((response) => response.json())
    .then(data => this.setState({ character: data.results }))
}
/////////////
    componentDidMount() {
       this.fetchData();
    }
//////////////////
    handlePagination =(e) => {
        this.setState({page: e.target.textContent})

    }

/////////////////

componentDidUpdate (prevProps, prevState) {
if(this.state.page !== prevState.page){
    this.fetchData();
}
}


    render() {
        return (
            <div>
                 <Link to="/project1">
                <Button text="func rick and morty" />
            </Link>
                <div>{btnPagination.map((_, idx) => {
                    return <button onClick={this.handlePagination}>{idx += 1}</button>
                })}</div>

                <div>
                    <div className='card-wrapper'>
                        {this.state.character.map(card => {
                            return <Fragment key={card.id}><Card title={card.name} genre={card.status} desc={card.gender} poster={card.image} /></Fragment>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
