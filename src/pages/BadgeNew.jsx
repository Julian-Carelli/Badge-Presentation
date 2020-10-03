//Dependencies

import React from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import BackgroundBadge from '../components/BackgroundBadge'

//Assets

import '../assets/styles/pages/BadgeNew.scss'

const BadgeNew = ({state, handleOnChange, handleOnSubmit}) => (
    <>
        <BackgroundBadge firstName={state.data.firstName} lastName={state.data.lastName}></BackgroundBadge>
        <div className="badgeNew container">
            <div className="badgeNew-row row">
                <div className="badgeNew__badge col-6">
                    <Badge data={state.data}></Badge>
                </div>
                <div className="badgeNew__form col-6">
                    <BadgeForm title="Nueva Presentacion" error={state.error} data={state.data} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
    </>

)

export default BadgeNew