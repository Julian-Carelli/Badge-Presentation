//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import DeleteBadgeModal from './DeleteBadgeModal'

//Assets

import '../assets/styles/components/Actions.scss'

const Actions = ({data, onOpenModal, deleteBadge, onCloseModal, modalIsOpen}) => (
    <>
        <h2>Acciones</h2>
        <div className="actions">
            <div className="actions__edit">
                <Link to={`/badges/${data.id}/edit`}>
                    <button className="btn btn-warning mb-4">Editar</button>
                </Link>
            </div>
            <div className="actions__delete">
                <button onClick={onOpenModal} className="btn btn-danger">Eliminar</button>
                <DeleteBadgeModal deleteBadge={deleteBadge} onClose={onCloseModal} isOpen={modalIsOpen}></DeleteBadgeModal>
            </div>
        </div>
    </>

)



export default Actions