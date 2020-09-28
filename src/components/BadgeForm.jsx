import React from 'react'
import '../assets/styles/components/BadgeForm.scss'

const BadgeForm = props => {
    const {onChange, onSubmit, form, error, title} = props
    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" onChange={onChange} value={form.firstName} placeholder="Nombre" name="firstName" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input type="text" onChange={onChange} value={form.lastName} placeholder="Apellido" name="lastName" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Correo</label>
                <input type="email" onChange={onChange} value={form.email} placeholder="Email" name="email" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Profesion</label>
                <input type="text" onChange={onChange} value={form.jobTitle} placeholder="Profesion" name="jobTitle" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Twitter</label>
                <input type="text" onChange={onChange} value={form.twitter} placeholder="Twitter" name="twitter" className="form-control"></input>
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