import React from 'react'
import '../assets/styles/components/BadgeForm.scss'

const BadgeForm = props => {
    const {onChange, onSubmit, form} = props
    return(
        <>
        <div>
            <h1>Nueva Presentacion</h1>
        </div>
        <form>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" onChange={onChange} value={form.firstName} name="firstName" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input type="text" onChange={onChange} value={form.lastName} name="lastName" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Correo</label>
                <input type="email" onChange={onChange} value={form.email} name="email" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Profesion</label>
                <input type="text" onChange={onChange} value={form.jobTitle} name="jobTitle" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Twitter</label>
                <input type="text" onChange={onChange} value={form.twitter} name="twitter" className="form-control"></input>
            </div>
            <button onClick={onSubmit} className="btn btn-primary">Agregar presentacion</button>
        </form>
        </>
    )
}

export default BadgeForm