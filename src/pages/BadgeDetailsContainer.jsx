//Dependencies

import React,{useState, useEffect} from 'react'

//Components

import BackgroundBadge from '../components/BackgroundBadge'
import Loading from '../components/Loading'
import Error500 from '../components/Error500'
import Badge from '../components/Badge'
import Actions from '../components/Actions'
import api from '../api'

const BadgeDetailsContainer = (props) => {
    const [state, setState] = useState({
        loading:true,
        error:null,
        data:undefined
    })

    useEffect(() => {
        const fetchData = async () => {
            setState({loading:true, error:null, data:state.data})

            try {
                const data = await api.badges.read(props.match.params.badgeId)
                setState({loading: false, error:null, data:data})
            }
            catch(error){
                setState({loading:false, error:error, data:state.data})
            }

        }
        fetchData()
    }, [])

    if(state.loading === true){
        return <Loading></Loading>
    }

    if(state.error){
        return <Error500></Error500>
    }

    return(
        <>
        <BackgroundBadge firstName={state.data.firstName} lastName={state.data.lastName}></BackgroundBadge>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <Badge form={state.data}></Badge>
                </div>
                <div className="col-6">
                    <Actions state={state.data}></Actions>
                </div>
            </div>
        </div>
        </>
    )
}

export default BadgeDetailsContainer