//Dependencies

import React,{useState, useEffect} from 'react'

//Components

import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import BadgeDetails from '../pages/BadgeDetails'
import api from '../api'

const BadgeDetailsContainer = (props) => {
    const [state, setState] = useState({
        loading:true,
        error:null,
        data:undefined,
        modalIsOpen: false,
    })

    useEffect(() => {
        const fetchData = async () => {
            setState({loading:true, error:null, data:state.data, modalIsOpen:false})

            try {
                const data = await api.badges.read(props.match.params.badgeId)
                setState({loading: false, error:null, data:data, modalIsOpen:true})
            }
            catch(error){
                setState({loading:false, error:error, data:state.data, modalIsOpen:false})
            }

        }
        fetchData()
    }, [])

    const handleOnOpenModal = e => {
        setState({modalIsOpen: true, loading:false, error:null, data:state.data})
    }

    const handleOnCloseModal = e => {
        setState({modalIsOpen:false, loading:false, error:null, data:state.data})
    }

    if(state.loading === true){
        return <Loading></Loading>
    }

    if(state.error){
        return <Error500></Error500>
    }

    return(
        <BadgeDetails 
        state={state} 
        handleOnCloseModal={handleOnCloseModal} 
        handleOnOpenModal={handleOnOpenModal}>
        </BadgeDetails>
    )
}

export default BadgeDetailsContainer