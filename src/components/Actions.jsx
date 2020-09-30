//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import DeleteBadgeModal from './DeleteBadgeModal'

const Actions = ({data, onOpenModal, deleteBadge, onCloseModal, modalIsOpen}) => (
    <>
        <h2>Acciones</h2>
        <div>
            <div>
                <Link to={`/badges/${data.id}/edit`}>
                    <button className="btn btn-warning mb-4">Editar</button>
                </Link>
            </div>
            <div>
                <button onClick={onOpenModal} className="btn btn-danger">Eliminar</button>
                <DeleteBadgeModal deleteBadge={deleteBadge} onClose={onCloseModal} isOpen={modalIsOpen}></DeleteBadgeModal>
            </div>
        </div>
    </>

)



export default Actions