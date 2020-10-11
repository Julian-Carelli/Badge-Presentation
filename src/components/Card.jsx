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
        filteredBadges.length <= 2 
            ?   <div className="container height" >
                    <CardFilter query={query} notFound={true} setQuery={setQuery}/>
                        {filteredBadges.map(state => 
                            <Link className="container__presentation text-reset text-decoration-none row" key={state.id} to={`/badges/${state.id}`}>
                                <div className="Card col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="Card__img ">
                                        <Gravatar className="Card__avatar" email={state.email} alt="Avatar"></Gravatar>
                                    </div>
                                    <div className="Card__info text-dark ">
                                        <h4 className="Card__title-primary">{state.firstName} {state.lastName}</h4>
                                        <h5 className="Card__title-secondary">{state.jobTitle}</h5>
                                        <p className="Card__text">{state.email}</p>
                                        <p className="Card__text">{state.twitter}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                </div>

            :   <div className="container">
                    <CardFilter query={query} notFound={true} setQuery={setQuery}/>
                        {filteredBadges.map(state => 
                            <Link className="container__presentation text-reset text-decoration-none row" key={state.id} to={`/badges/${state.id}`}>
                                <div className="Card col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="Card__img ">
                                        <Gravatar className="Card__avatar" email={state.email} alt="Avatar"></Gravatar>
                                    </div>
                                    <div className="Card__info text-dark ">
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