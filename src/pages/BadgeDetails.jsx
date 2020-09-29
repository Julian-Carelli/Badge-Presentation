//Dependencies

import React from 'react'

//Components

import BackgroundBadge from '../components/BackgroundBadge'
import Badge from '../components/Badge'
import Actions from '../components/Actions'

const BadgeDetails = (props) => (
    <>
        <BackgroundBadge firstName={props.state.data.firstName} lastName={props.state.data.lastName}></BackgroundBadge>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <Badge data={props.state.data}></Badge>
                </div>
                <div className="col-6">
                    <Actions 
                    onCloseModal={props.handleOnCloseModal} 
                    onOpenModal={props.handleOnOpenModal}
                    modalIsOpen={props.state.modalIsOpen}
                    deleteBadge={props.handleDeleteBadge}
                    data={props.state.data}>
                    </Actions>
                </div>
            </div>
        </div>
    </>
)   

export default BadgeDetails