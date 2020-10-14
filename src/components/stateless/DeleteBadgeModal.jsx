//Dependencies

import React from 'react'

//Components

import Modal from './Modal'

const DeleteBadgeModal = ({isOpen, onClose, deleteBadge}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="DeleteBadgeModal__message">
            <h1 className="DeleteBadgeModal__title">Estas seguro?</h1>
            <p className="DeleteBadgeModal__text">Estas a punto de eliminar este badge</p>
        </div>
        <div className="DeleteBadgeModal__actions">
            <button onClick={deleteBadge}  className="DeleteBadgeModal__button btn btn-danger mr-4">Eliminar</button>
            <button  onClick={onClose} className="DeleteBadgeModal__button btn btn-primary">Cancelar</button>
        </div>
    </Modal>
)

export default DeleteBadgeModal