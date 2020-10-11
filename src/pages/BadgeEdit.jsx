//Dependencies

import React from 'react'

//Components

import Badge from '../components/stateless/Badge'
import BadgeForm from '../components/stateless/BadgeForm'
import BackgroundBadge from '../components/stateless/BackgroundBadge'

//Assets

import '../assets/styles/pages/BadgeEdit.scss'

const BadgeEdit = ({data,handleOnChange, handleOnSubmit}) => (

    <>
        <BackgroundBadge firstName={data.firstName} lastName={data.lastName}></BackgroundBadge>
        <div className="badgeEdit container">
            <div className="badgeEdit-row row">
                <div className="badgeEdit-row__badge col-12 col-sm-12  col-md-6 col-lg-6 col-xl-6">
                    <Badge data={data}></Badge>
                </div>
                <div className="badgeEdit-row__form col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <BadgeForm title="Editar Presentacion" data={data} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
    </>

)

export default BadgeEdit