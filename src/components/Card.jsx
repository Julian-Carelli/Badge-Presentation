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
                    <div className="form-group">
                        <label>Filtrar Badges</label>
                        <input 
                        className="form-group" 
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}></input>
                    </div>
                    <h3>No Encontre ningun badge seleccionado</h3>
                    <Link to="/badges/new">
                        <button className="btn btn-primary">Crea tu primer Badge</button>
                    </Link>
                </div>
            </>
        )
    }

    return(
        <div className="container">
            <div className="form-group container-filter">
                <label>Filtrar Badges</label>
                <input 
                className="form-group" 
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}></input>
            </div>
            {filteredBadges.map(state => 
                <Link className="text-reset text-decoration-none" key={state.id} to={`/badges/${state.id}`}>
                    <div  className="row Card bg-white">
                        <div className="col-6 Card__img">
                            <Gravatar email={state.email} alt="Avatar"></Gravatar>
                        </div>
                        <div className="col-6 Card__text text-dark">
                            <h2>{state.firstName} {state.lastName}</h2>
                            <h3>{state.jobTitle}</h3>
                            <p>{state.email}</p>
                            <p>{state.twitter}</p>
                        </div>
                    </div>
                </Link>
                
                )}
        </div>
    )
}

export default Card