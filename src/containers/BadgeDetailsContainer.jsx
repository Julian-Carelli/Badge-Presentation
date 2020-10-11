//Dependencies

import React,{useState, useEffect} from 'react'

//Components

import Loading from '../components/stateless/Loading'
import Error500 from '../components/stateless/Error500'
import BadgeDetails from '../pages/BadgeDetails'
import api from '../api'

const BadgeDetailsContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(undefined)
    const [modalIsOpen, setModalIsOpen] = useState(false) 

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        setData(undefined)
        setModalIsOpen(false)

        try {
            const data = await api.badges.read(props.match.params.badgeId)
            setData(data)
            setModalIsOpen(false)
            setLoading(false)

        }
        catch(error){
            setError(error)
            setModalIsOpen(false)
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleOnOpenModal = e => {
        setError(null)
        setModalIsOpen(true)
        setData(data)
        setLoading(false)
    }

    const handleOnCloseModal = e => {
        setError(null)
        setModalIsOpen(false)
        setData(data)
        setLoading(false)
    }

    const handleDeleteBadge = async e => {
        setError(null)
        setModalIsOpen(false)
        setData(data)
        setLoading(false)

        try {
            await api.badges.remove(
                props.match.params.badgeId
            )
            
            setError(null)
            setModalIsOpen(true)
            setData(data)
            setLoading(false)

            props.history.push('/badges')
        }

        catch(error){
            setError(null)
            setModalIsOpen(false)
            setData(data)
            setLoading(false)

        }
    }

    if(loading === true){
        return <Loading></Loading>
    }

    if(error){
        return <Error500></Error500>
    }

    return(
        <BadgeDetails 
        data={data} 
        handleOnCloseModal={handleOnCloseModal} 
        handleOnOpenModal={handleOnOpenModal}
        handleDeleteBadge={handleDeleteBadge}
        modalIsOpen={modalIsOpen}
        >
        </BadgeDetails>
    )
}

export default BadgeDetailsContainer