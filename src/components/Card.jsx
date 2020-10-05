//Dependencies

import React, {useState, useMemo} from 'react'
import {Link} from 'react-router-dom'

//Components

import Gravatar from '../components/Gravatar'

//Assets

import '../assets/styles/components/Card.scss'


const Card = ({state}) => {


    const [query, setQuery] = useState('')
    const [filteredBadges, setFilteredBadges] = useState(state)


    useMemo(() => {
        const results = state.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())})

        setFilteredBadges(results)

    },[state, query])

    if(filteredBadges.length === 0){
        return (
            <>
                
                <div className="container">
                    <div className="container__filter form-group">
                        <label className="container__label">Filtrar Badges</label>
                        <input 
                        className="container__input form-group" 
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}></input>
                    </div>
                    <div className="container__notFound">
                        <h3>No Encontre ningun badge seleccionado</h3>
                        <Link to="/badges/new">
                            <button className="container__button btn-primary">Crea tu primer Badge</button>
                        </Link>
                    </div>
                    
                </div>
            </>
        )
    }

    return(
        <div className="container">
            <div className="container__filter form-group">
                <label className="container__label">Filtrar Badges</label>
                <input 
                className="container__input form-group" 
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}></input>
            </div>
            {filteredBadges.map(state => 
                <Link className="text-reset text-decoration-none" key={state.id} to={`/badges/${state.id}`}>
                    <div className="Card row">
                        <div className="Card__img col-6">
                            <Gravatar email={state.email} alt="Avatar"></Gravatar>
                        </div>
                        <div className="Card__text text-dark col-6">
                            <h4 className="Card__title-primary">{state.firstName} {state.lastName}</h4>
                            <h5 className="Card__title-secondary">{state.jobTitle}</h5>
                            <p className="Card__text">{state.email}</p>
                            <p className="Card__text">{state.twitter}</p>
                        </div>
                    </div>
                </Link>
                
                )}
        </div>
    )
}

export default Card