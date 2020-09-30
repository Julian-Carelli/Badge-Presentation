//Dependencies

import React from 'react'

//Components

import BackgroundBadge from '../components/BackgroundBadge'
import Badge from '../components/Badge'
import Actions from '../components/Actions'

const BadgeDetails = ({state, handleOnCloseModal, handleDeleteBadge, handleOnOpenModal}) => (
    <>
        <BackgroundBadge firstName={state.data.firstName} lastName={state.data.lastName}></BackgroundBadge>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <Badge data={state.data}></Badge>
                </div>
                <div className="col-6">
                    <Actions 
                    onCloseModal={handleOnCloseModal} 
                    onOpenModal={handleOnOpenModal}
                    modalIsOpen={state.modalIsOpen}
                    deleteBadge={handleDeleteBadge}
                    data={state.data}>
                    </Actions>
                </div>
            </div>
        </div>
    </>
)   

export default BadgeDetails