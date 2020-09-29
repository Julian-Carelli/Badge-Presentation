//Dependecies

import React from 'react'

//Assets

import '../assets/styles/components/BadgeForm.scss'

const BadgeForm = props => {
    const {onChange, onSubmit, data, error, title} = props
    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" onChange={onChange} value={data.firstName} placeholder="Nombre" name="firstName" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input type="text" onChange={onChange} value={data.lastName} placeholder="Apellido" name="lastName" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Correo</label>
                <input type="email" onChange={onChange} value={data.email} placeholder="Email" name="email" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Profesion</label>
                <input type="text" onChange={onChange} value={data.jobTitle} placeholder="Profesion" name="jobTitle" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Twitter</label>
                <input type="text" onChange={onChange} value={data.twitter} placeholder="Twitter" name="twitter" className="form-control"></input>
            </div>
            <button className="btn btn-primary">Agregar presentacion</button>
            {error && 
                <p className="text-danger">{error.message}</p>
            }
        </form>
        </>
    )
}

export default BadgeForm