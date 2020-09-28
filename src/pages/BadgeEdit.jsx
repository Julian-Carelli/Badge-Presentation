//Dependencies

import React,{useState, useEffect} from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Background from '../components/Background'
import api from '../api'

const BadgeEdit = (props) => {

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

    useEffect(() => {
        const fetchData = async () => {
            setState({loading:true, error:null, form:state.form})

            try {

                const data = await api.badges.read(
                    props.match.params.badgeId
                )

                setState({loading:false, error:null, form:data})


            }
            catch(error){
                setState({loading:false, error:error, form:state.form})
            }
        }
        fetchData()
    }, [])


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
            const data = await api.badges.update(props.match.params.badgeId, state.form)
            setState({loading:false, error:null, form:data})
            props.history.push('/badges')

        }
        catch(error){
            setState({loading:false, error:error, form:state.form})
        }
    }


    return(
        <>
        <Background title="Editar Presentacion"></Background>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge form={state.form}></Badge>
                </div>
                <div className="col-6">
                    <BadgeForm title="Editar Presentacion" error={state.error} form={state.form} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
        </>
    )
}

export default BadgeEdit