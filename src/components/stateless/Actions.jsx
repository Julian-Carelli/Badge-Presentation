//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'

//Components

import DeleteBadgeModal from './DeleteBadgeModal'

//Assets

import '../../assets/styles/components/Actions.scss'

const Actions = ({data, onOpenModal, deleteBadge, onCloseModal, modalIsOpen}) => (
    <>  
        <div className="Actions container">
            <div className="Actions-menu row">
                <div className="Actions-menu__presentation col-12">
                    <h2 className="Actions-menu__title">Acciones</h2>
                </div>
                <div className="Actions-menu__method col-12">
                    <div className="Actions-menu__edit">
                        <Link to={`/badges/${data.id}/edit`}>
                            <button className="Actions-menu__button btn btn-warning mb-4">Editar</button>
                        </Link>
                    </div>
                    <div className="Actions-menu__delete">
                        <button onClick={onOpenModal} className="Actions-menu__button btn btn-danger">Eliminar</button>
                        <DeleteBadgeModal deleteBadge={deleteBadge} onClose={onCloseModal} isOpen={modalIsOpen}></DeleteBadgeModal>
                    </div>
                </div>    
            </div>
        </div>
        
    </>

)



export default Actions