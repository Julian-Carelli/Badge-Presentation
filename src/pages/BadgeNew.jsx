import React,{useState} from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Background from '../components/Background'

const BadgeNew = props => {

    const [state, setState] = useState({
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

    const handleOnSubmit = event => {
        event.preventDefault()
        props.history.push('/badges')
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
                    <BadgeForm form={state.form} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
        </>
    )
}

export default BadgeNew