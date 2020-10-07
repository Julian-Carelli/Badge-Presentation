//Dependencies

import React from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import BackgroundBadge from '../components/BackgroundBadge'

//Assets

import '../assets/styles/pages/BadgeEdit.scss'

const BadgeEdit = ({state, handleOnChange, handleOnSubmit}) => (

    <>
        <BackgroundBadge firstName={state.data.firstName} lastName={state.data.lastName}></BackgroundBadge>
        <div className="badgeEdit container">
            <div className="badgeEdit-row row">
                <div className="badgeEdit-row__badge col-12 col-sm-12  col-md-6 col-lg-6 col-xl-6">
                    <Badge data={state.data}></Badge>
                </div>
                <div className="badgeEdit-row__form col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <BadgeForm title="Editar Presentacion" error={state.error} data={state.data} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
    </>

)

export default BadgeEdit