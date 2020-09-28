//Dependencies
import React from 'react'

//Components

import md5 from 'md5'

const Gravatar = (props) => {

    const {email, className, alt} = props

    const first_email = email;
    const hash = md5(first_email)

    return(
        <img 
            className={className}
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            alt={alt}>
        </img>
    )
}

export default Gravatar