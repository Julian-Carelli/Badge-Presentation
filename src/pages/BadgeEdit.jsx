//Dependencies

import React from 'react'

//Components

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Background from '../components/Background'

const BadgeEdit = ({state, handleOnChange, handleOnSubmit}) => (

    <>
        <Background title="Editar Presentacion"></Background>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge data={state.data}></Badge>
                </div>
                <div className="col-6">
                    <BadgeForm title="Editar Presentacion" error={state.error} data={state.data} onSubmit={handleOnSubmit} onChange={handleOnChange}></BadgeForm>
                </div>
            </div>
        </div>
    </>

)

export default BadgeEdit