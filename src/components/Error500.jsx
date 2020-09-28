import React from 'react'
import '../assets/styles/components/Error500.scss'
import {Link} from 'react-router-dom'

const Error500 = () => (
    <div className="container-fluid Error500">
        <div className="row Error500-row">
            <div className="col-12 Error500__col">
                <div className="Error500__col--info">
                    <h1>Hubo un problema en el servidor</h1>
                    <span>Vuelva devuelta al Home</span>
                </div>
                <div className="Error500__col--btn">
                    <Link to="/">
                        <button className="btn btn-danger">Volver al Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Error500