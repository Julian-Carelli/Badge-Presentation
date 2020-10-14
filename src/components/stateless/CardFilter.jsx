//Dependencies

import React from 'react'
import {Link} from 'react-router-dom'


const CardFilter = ({query, setQuery, notFound}) => {

    return(
        <>
            <div className="Container__filter form-group">
                <label className="Container__label">Filtrar Badges</label>
                <input 
                maxLength="20"
                className="Container__input form-group" 
                type="text"
                value={query}
                onChange={(e) => {
                setQuery(e.target.value)
                }}></input>
            </div>
            {notFound === false && 
                <div className="Container__notFound">
                    <h3 className="Container__title">No Encontre ningun badge seleccionado</h3>
                    <Link to="/badges/new">
                        <button className="Container__button btn btn-primary">Crea tu primer Badge</button>
                    </Link>
                </div>
            }
            
        </>
    )
}
    


export default CardFilter