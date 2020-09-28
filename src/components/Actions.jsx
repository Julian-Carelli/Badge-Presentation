//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

const Actions = (props) => {
    const {id} = props

    return(
        <>
        <h2>Acciones</h2>
        <div>
            <div>
                <Link to={`/badges/${id}/edit`}>
                    <button className="btn btn-warning mb-4">Editar</button>
                </Link>
            </div>
            <div>
                <button className="btn btn-danger">Eliminar</button>
            </div>
        </div>
        </>

    )

}

export default Actions