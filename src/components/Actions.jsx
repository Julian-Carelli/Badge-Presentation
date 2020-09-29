//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import DeleteBadgeModal from './DeleteBadgeModal'

const Actions = (props) => {

    return(
        <>
        <h2>Acciones</h2>
        <div>
            <div>
                <Link to={`/badges/${props.data.id}/edit`}>
                    <button className="btn btn-warning mb-4">Editar</button>
                </Link>
            </div>
            <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">Eliminar</button>
                <DeleteBadgeModal deleteBadge={props.deleteBadge} onClose={props.onCloseModal} isOpen={props.modalIsOpen}></DeleteBadgeModal>
            </div>
        </div>
        </>

    )

}

export default Actions