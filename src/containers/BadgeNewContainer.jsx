//Dependencies

import React,{useState} from 'react'

//Components


import Loading from '../components/Loading'
import BadgeNew from '../pages/BadgeNew'
import api from '../api'


const BadgeNewContainer = (props) => {

    const [state, setState] = useState({
        loading:false,
        error:null,
        data:{
            firstName:"",
            lastName:"",
            email:"",   
            jobTitle:"",
            twitter:""
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
        setState({loading:true, error:null, data:state.data})
        event.preventDefault()

        try {
            const data = await api.badges.create(state.data)
            setState({loading:false, error:null, data:data})
            props.history.push('/badges')

        }
        catch(error){
            setState({loading:false, error:error, data:state.data})
        }
    }

    if(state.Loading === true){
        return <Loading></Loading>
    }


    
    

    return(
        <BadgeNew state={state} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange}></BadgeNew>
    )

}

export default BadgeNewContainer