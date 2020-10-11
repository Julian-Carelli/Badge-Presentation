//Dependencies

import React, {useState, useMemo} from 'react'
import {Link} from 'react-router-dom'

//Components

import CardFilter from '../stateless/CardFilter'
import arrayFilter from '../../utils/arrayFilter'
import Card from '../stateless/Card'

//Assets

import '../../assets/styles/components/Card.scss'


const Container = ({data}) => {


    const [query, setQuery] = useState('')
    const [filteredBadges, setFilteredBadges] = useState(data)

    useMemo(() => {
        const results = arrayFilter(data, query)

        setFilteredBadges(results)

    },[data, query])


    if(filteredBadges.length === 0){
        return (
            <div className="Container">
                <CardFilter query={query} setQuery={setQuery} notFound={false}/>
            </div>
        )
    }

    return(
        filteredBadges.length <= 2 
            ?   <div className="Container height" >
                    <CardFilter query={query} notFound={true} setQuery={setQuery}/>
                        {filteredBadges.map(state => 
                            <Link className="Container__presentation text-reset text-decoration-none row" key={state.id} to={`/badges/${state.id}`}>
                                <Card state={state}/>
                            </Link>
                        )}
                </div>

            :   <div className="Container">
                    <CardFilter query={query} notFound={true} setQuery={setQuery}/>
                        {filteredBadges.map(state => 
                            <Link className="Container__presentation text-reset text-decoration-none row" key={state.id} to={`/badges/${state.id}`}>
                                <Card state={state}/>
                            </Link>
                        )}
                </div>   
    )
}

export default Container