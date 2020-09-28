//Dependencies

import React,{useState} from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Background from '../components/Background'
import Loading from '../components/Loading'
import api from '../api'

const BadgeNew = (props) => {

    const [state, setState] = useState({
        loading:false,
        error:null,
        form:{
            firstName:"",
            lastName:"",
            email:"",   
            jobTitle:"",
            twitter:""
        }
    })

    const handleOnChange = event => {
        setState({
            form:{
                ...state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleOnSubmit = async event => {
        setState({loading:true, error:null, form:state.form})
        event.preventDefault()

        try {
            const data = await api.badges.create(state.form)
            setState({loading:false, error:null, form:data})
            props.history.push('/badges')

        }
        catch(error){
            setState({loading:false, error:error, form:state.form})
        }
    }

    if(state.Loading === true){
        return <Loading></Loading>
    }

    

    return(
        <>
        <Background></Background>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge form={state.form}></Badge>
                </div>
                <div className="col-6">
                    <BadgeForm title="Nueva Presentacion" error={state.error} form={state.form} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
        </>
    )
}

export default BadgeNew