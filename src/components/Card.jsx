//Dependencies

import React, {useState, useMemo} from 'react'
import {Link} from 'react-router-dom'

//Components

import CardFilter from '../components/CardFilter'
import Gravatar from '../components/Gravatar'

//Assets

import '../assets/styles/components/Card.scss'


const Card = ({state}) => {


    const [query, setQuery] = useState('')
    const [filteredBadges, setFilteredBadges] = useState(state)


    const arrayFilter = (array, query) => array.filter(badge => 
        `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase()))
        
    

    useMemo(() => {
        const results = arrayFilter(state, query)

        setFilteredBadges(results)

    },[state, query])

    if(filteredBadges.length === 0){
        return (
            <div className="container">
                <CardFilter query={query} setQuery={setQuery} notFound={false}/>
            </div>
        )
    }

    return(
        <div className="container">
           <CardFilter query={query} notFound={true} setQuery={setQuery}/>
            {filteredBadges.map(state => 
                <Link className="text-reset text-decoration-none" key={state.id} to={`/badges/${state.id}`}>
                    <div className="Card row">
                        <div className="Card__img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Gravatar email={state.email} alt="Avatar"></Gravatar>
                        </div>
                        <div className="Card__info text-dark col-6 col-sm-6 col-md-6 col-lg-6 col-6-xl">
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