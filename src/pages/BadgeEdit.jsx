//Dependencies

import React from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Background from '../components/Background'

import '../assets/styles/pages/BadgeEdit.scss'

const BadgeEdit = ({state, handleOnChange, handleOnSubmit}) => (

    <>
        <Background data={state.data}></Background>
        <div className="badgeEdit container">
            <div className="badgeEdit-row row">
                <div className="badgeEdit__badge col-6">
                    <Badge data={state.data}></Badge>
                </div>
                <div className="badgeEdit__form col-6">
                    <BadgeForm title="Editar Presentacion" error={state.error} data={state.data} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
    </>

)

export default BadgeEdit