//Dependecies

import React from 'react'

//Assets

import '../assets/styles/components/BadgeForm.scss'


const BadgeForm = ({onChange, onSubmit, data, error, title}) => (
    <>
        <div className="Badge-presentation">
            <h1 className="Badge-presentation__title">{title}</h1>
        </div>
        <form className="Badge-form" onSubmit={onSubmit}>
            <div className="Badge-form__block form-group">
                <label className="Badge-form__label">Nombre</label>
                <input className="Badge-form__input form-control" type="text" required onChange={onChange} maxLength="10" value={data.firstName} placeholder="Nombre" name="firstName"></input>
            </div>
            <div className="Badge-form__block form-group">
                <label className="Badge-form__label">Apellido</label>
                <input className="Badge-form__input form-control" type="text" required onChange={onChange} maxLength="10" value={data.lastName} placeholder="Apellido" name="lastName"></input>
            </div>
            <div className="Badge-form__block form-group">
                <label className="Badge-form__label" >Correo</label>
                <input className="Badge-form__input form-control" type="email" required onChange={onChange} maxLength="35" value={data.email} placeholder="Email" name="email" ></input>
            </div>
            <div className="Badge-form__block form-group">
                <label className="Badge-form__label">Profesion</label>
                <input className="Badge-form__input form-control" type="text" required onChange={onChange} maxLength="35" value={data.jobTitle} placeholder="Profesion" name="jobTitle"></input>
            </div>
            <div className="Badge-form__block form-group">
                <label className="Badge-form__label">Twitter</label>
                <input className="Badge-form__input form-control" type="text" required onChange={onChange} maxLength="10" value={data.twitter} placeholder="Twitter" name="twitter"></input>
            </div>
            <div className="Badge-form__block">
                <button className="Badge-form__button btn btn-primary" >Agregar presentacion</button>
            </div>
            {error && 
                <p className="text-danger">{error.message}</p>
            }
        </form>
    </>
)


export default BadgeForm