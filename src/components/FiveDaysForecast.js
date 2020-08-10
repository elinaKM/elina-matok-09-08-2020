import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const FiveDaysForecast = ({items}) => {
    
    //pay attantion to remove:
    const forcast = [
        {title: "SUN", details1: "38C"},
        {title: "SUN", details1: "38C"},
        {title: "SUN", details1: "38C"},
        {title: "SUN", details1: "38C"},
        {title: "SUN", details1: "38C"}];
    return(
        <Wrapper>
            {forcast.map((item, index) => <Card key={index} item={item}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

export default FiveDaysForecast