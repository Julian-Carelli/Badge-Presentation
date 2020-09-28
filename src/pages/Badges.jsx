//Dependencies

import React, {useState, useEffect} from 'react'

//Components

import Background from '../components/Background'
import Redirection from '../components/Redirection'
import Card from '../components/Card'
import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import api from '../api'

const Badges = (props) => {

    const [state, setState] = useState({
        loading:true,
        error:null,
        data:undefined,
    })

    useEffect(() => {
        const fetchData = async () => {
            setState({loading:true, error:null})
    
            try {   
                const data = await api.badges.list()
                setState({loading:false, data:data})
            }
            catch(error){
    
                setState({loading:false, error:error})
    
            }
        }
        fetchData()
    }, [])

    
    if(state.loading === true) {
        return <Loading></Loading>
    }

    if(state.error) {
        return <Error500></Error500>
    }

    return(
        
        <>
        <Background></Background>
        <Redirection></Redirection>
        <Card 
            state={state.data}>
        </Card>
        </>
    )
}

export default Badges