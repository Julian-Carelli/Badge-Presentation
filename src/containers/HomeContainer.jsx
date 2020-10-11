//Dependencies

import React, {useState, useEffect} from 'react'

//Components

import Loading from '../components/stateless/Loading'
import Error500 from '../components/stateless/Error500'
import api from '../api'
import Home from '../pages/Home'


const HomeContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(undefined)

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        setData(undefined)

        try {
            const data = await api.badges.list()
            setData(data)
            setError(undefined)
            setLoading(false)

        }

        catch(error) {
            setData(undefined)
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(loading === true){
        return <Loading></Loading>
    }

    if(error){
        return <Error500></Error500>
    }

    const dataReverse = data.slice(0).reverse().slice(0, 3)

    return(
        <Home 
        data={dataReverse}
        ></Home>
    )
}

export default HomeContainer