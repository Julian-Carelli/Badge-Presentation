import React from 'react'
import {Link} from 'react-router-dom'


const CardFilter = ({query, setQuery, notFound}) => {

    return(
        <>
            <div className="container__filter form-group">
                <label className="container__label">Filtrar Badges</label>
                <input 
                className="container__input form-group" 
                type="text"
                value={query}
                onChange={(e) => {
                setQuery(e.target.value)
                }}></input>
            </div>
            {notFound === false && 
                <div className="container__notFound">
                    <h3 className="container__title">No Encontre ningun badge seleccionado</h3>
                    <Link to="/badges/new">
                        <button className="container__button btn btn-primary">Crea tu primer Badge</button>
                    </Link>
                </div>
            }
            
        </>
    )
}
    


export default CardFilter