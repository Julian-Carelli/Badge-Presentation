//Dependencies

import React,{useState} from 'react'

//Components

import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import BadgeNew from '../pages/BadgeNew'
import api from '../api'

const BadgeNewContainer = (props) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        data:{
            firstName:"",
            lastName:"",
            email:"",
            jobTitle:"",
            twitter:"",
        }
    })

    const handleOnChange = event => {
        setState({
            data:{
                ...state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleOnSubmit = async event => {

        setLoading(true)
        setError(null)
        setState({...state.data})

        event.preventDefault()

        try {
            const data = await api.badges.create(state.data)
            setState({data:data})
            setError(null)
            setLoading(false)

            props.history.push('/badges')

        }
        catch(error){
            setError(error)
            setLoading(false)
        }
    }

    if(loading === true){
        return <Loading></Loading>
    }

    if(error){
        return <Error500></Error500>
    }

    

    return(
        <BadgeNew state={state} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange}></BadgeNew>
    )
}

export default BadgeNewContainer