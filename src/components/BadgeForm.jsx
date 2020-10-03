//Dependecies

import React from 'react'

//Assets

import '../assets/styles/components/BadgeForm.scss'

const BadgeForm = ({onChange, onSubmit, data, error, title}) => (
    <>
        <div className="title">
            <h1>{title}</h1>
        </div>
        <form className="form" onSubmit={onSubmit}>
            <div className="form__block form-group">
                <label>Nombre</label>
                <input type="text" required onChange={onChange} maxLength="10" value={data.firstName} placeholder="Nombre" name="firstName" className="form-control"></input>
            </div>
            <div className="form__block form-group">
                <label>Apellido</label>
                <input type="text" required onChange={onChange} maxLength="10" value={data.lastName} placeholder="Apellido" name="lastName" className="form-control"></input>
            </div>
            <div className="form__block form-group">
                <label>Correo</label>
                <input type="email" required onChange={onChange} maxLength="35" value={data.email} placeholder="Email" name="email" className="form-control"></input>
            </div>
            <div className="form__block form-group">
                <label>Profesion</label>
                <input type="text" required onChange={onChange} maxLength="35" value={data.jobTitle} placeholder="Profesion" name="jobTitle" className="form-control"></input>
            </div>
            <div className="form__block form-group">
                <label>Twitter</label>
                <input type="text" required onChange={onChange} maxLength="10" value={data.twitter} placeholder="Twitter" name="twitter" className="form-control"></input>
            </div>
            <div className="form__button">
                <button className="btn btn-primary">Agregar presentacion</button>
            </div>
            {error && 
                <p className="text-danger">{error.message}</p>
            }
        </form>
    </>
)


export default BadgeForm