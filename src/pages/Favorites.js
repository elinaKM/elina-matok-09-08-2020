import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LocationCard from './../components/LocationCard'

const Favorites = (props) => {

    const forcast = useSelector(state => state.favorites);

    return(
        <ListWrapper>
            {forcast.length > 0 && forcast.map((item) => <LocationCard key={item.key} itemKey={item.key} name={item.name}/>)}
            {forcast.length === 0 && 
                <NoLoactionSaved>
                    No favorites found, go ahead and add some!
                </NoLoactionSaved>
            }
        </ListWrapper>
    )
}

const NoLoactionSaved = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px auto;
`

const ListWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 20px;
`

export default Favorites