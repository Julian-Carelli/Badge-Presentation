//Dependencies

import React, {useState, useEffect} from 'react'

//Components

import BadgeEdit from '../pages/BadgeEdit'
import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import api from '../api'

const BadgeEditContainer = (props) => {

    const [loading, setLoading] = useState(true)
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

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        setState({...state.data})

        try {

            const data = await api.badges.read(
                props.match.params.badgeId
            )

            setState({data:data})
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
            const data = await api.badges.update(props.match.params.badgeId, state.data)
            setState({data:data})
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
        <BadgeEdit state={state} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange}></BadgeEdit>
    )
}

export default BadgeEditContainer