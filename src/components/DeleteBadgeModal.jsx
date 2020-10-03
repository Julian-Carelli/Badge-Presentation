//Dependencies

import React from 'react'

//Components

import Modal from '../components/Modal'


const DeleteBadgeModal = ({isOpen, onClose, deleteBadge}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="DeleteBadgeModal">
            <h1>Estas seguro?</h1>
            <p>Estas a punto de eliminar este badge</p>
        </div>
        <div>
            <button onClick={deleteBadge}  className="btn btn-danger mr-4">Eliminar</button>
            <button  onClick={onClose} className="btn btn-primary">Cancelar</button>

        </div>

    </Modal>
)

export default DeleteBadgeModal