//Dependencies

import React, {useState, useEffect} from 'react'

//Components

import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import api from '../api'
import Home from '../pages/Home'


const HomeContainer = () => {
    const [state, setState] = useState({
        loading:true,
        error:null,
        data:undefined
    })

    const fetchData = async () => {
        setState({loading:true, error:null, data:state.data})

        try {
            const data = await api.badges.list()
            setState({loading:false, error:null, data:data})
        }

        catch(error) {
            setState({loading:false, error:error, data:state.data})
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(state.loading === true){
        return <Loading></Loading>
    }

    if(state.error){
        return <Error500></Error500>
    }

    const stateReverse = state.data.slice(0).reverse().slice(0, 3)

    return(
        <Home state={stateReverse}></Home>
    )
}

export default HomeContainer