import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Header from '../assets/images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import '../assets/styles/pages/BadgeNew.scss'

const BadgeNew = () => {

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
        console.log(state.form)
    }

    return(
        <>
        <Navbar></Navbar>
        <div className="BadgeNew__hero">
            <img className="BadgeNew__hero--img img-fluid" src={Header} alt="Header de la conferencia"></img>
        </div>
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