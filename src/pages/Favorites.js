import React from 'react'
import styled from 'styled-components'
import LocationCard from './../components/LocationCard'

const Favorites = (props) => {
    // const forcast = [];
    const forcast = [
        {title: "Jerusalem", details1: "38C", details2: "Cloudy"},
        {title: "Jerusalem", details1: "38C", details2: "Cloudy"},
        {title: "Jerusalem", details1: "38C", details2: "Cloudy"},
        {title: "Jerusalem", details1: "38C", details2: "Cloudy"},
        {title: "Jerusalem", details1: "38C", details2: "Cloudy"},
    ];

    const onRemove = () => {
        //REMOVE ITEM FROM LIST OF FAVORITES
    }
    return(
        <ListWrapper>
            {forcast.length > 0 && forcast.map((item, index) => <LocationCard key={index} item={item} onRemove={onRemove}/>)}
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