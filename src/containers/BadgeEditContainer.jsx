//Dependencies

import React,{useState, useEffect} from 'react'

//Components

import BadgeEdit from '../pages/BadgeEdit'
import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import api from '../api'

const BadgeEditContainer = (props) => {

    const [state, setState] = useState({
        loading:true,
        error:null,
        data:{
            firstName:"",
            lastName:"",
            email:"",   
            jobTitle:"",
            twitter:""
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            setState({loading:true, error:null, data:state.data})

            try {

                const data = await api.badges.read(
                    props.match.params.badgeId
                )

                setState({loading:false, error:null, data:data})


            }
            catch(error){
                setState({loading:false, error:error, data:state.data})
            }
        }
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
        setState({loading:true, error:null, data:state.data})
        event.preventDefault()

        try {
            const data = await api.badges.update(props.match.params.badgeId, state.data)
            setState({loading:false, error:null, data:data})
            props.history.push('/badges')

        }
        catch(error){
            setState({loading:false, error:error, data:state.data})
        }
    }

    if(state.loading === true){
        return <Loading></Loading>
    }

    if(state.error){
        return <Error500></Error500>
    }

    return(
        <BadgeEdit state={state} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange}></BadgeEdit>
    )
}

export default BadgeEditContainer