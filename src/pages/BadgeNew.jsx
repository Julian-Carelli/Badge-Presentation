//Dependencies

import React from 'react'

//Components

import Badge from '../components/stateless/Badge'
import BadgeForm from '../components/stateless/BadgeForm'
import BackgroundBadge from '../components/stateless/BackgroundBadge'

//Assets

import '../assets/styles/pages/BadgeNew.scss'

const BadgeNew = ({data, handleOnChange, handleOnSubmit}) => (
    <>
        <BackgroundBadge firstName={data.firstName} lastName={data.lastName}></BackgroundBadge>
        <div className="BadgeNew container">
            <div className="BadgeNew-row row">
                <div className="BadgeNew-row__badge col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Badge data={data}></Badge>
                </div>
                <div className="BadgeNew-row__form col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <BadgeForm title="Nueva Presentacion"  data={data} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
    </>

)

export default BadgeNew