//Dependencies

import React, {useState, useEffect} from 'react'

//Components

import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import api from '../api'
import Badges from '../pages/Badges'

const BadgesContainer = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(undefined)

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        setData(data)

        try {   
            const data = await api.badges.list()
            setData(data)
            setLoading(false)

        }
        catch(error){
            setError(error)
            setLoading(false)

        }
    }
        

    useEffect(() => {
        fetchData()
    }, [])

    
    if(loading === true) {
        return <Loading></Loading>
    }

    if(error) {
        return <Error500></Error500>
    }


    return(
        
        <Badges state={data}></Badges>

    )
}

export default BadgesContainer