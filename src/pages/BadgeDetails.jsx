//Dependencies

import React from 'react'

//Components

import BackgroundBadge from '../components/stateless/BackgroundBadge'
import Badge from '../components/stateless/Badge'
import Actions from '../components/stateless/Actions'

//Assets

import '../assets/styles/pages/BadgeDetails.scss'

const BadgeDetails = ({data, modalIsOpen, handleOnCloseModal, handleDeleteBadge, handleOnOpenModal}) => (
    <>
        <BackgroundBadge firstName={data.firstName} lastName={data.lastName}></BackgroundBadge>
        <div className="BadgeDetails container">
            <div className="BadgeDetails__row row">
                <div className="BadgeDetails__badge col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <Badge data={data}></Badge>
                </div>
            </div>
            <div className="BadgeDetails__row row">
                <div className="BadgeDetails__actions col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                    <Actions 
                    onCloseModal={handleOnCloseModal} 
                    onOpenModal={handleOnOpenModal}
                    modalIsOpen={modalIsOpen}
                    deleteBadge={handleDeleteBadge}
                    data={data}>
                    </Actions>
                </div>
            </div>
        </div>
    </>
)   

export default BadgeDetails