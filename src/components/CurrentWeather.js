import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const CurrentWeather = ({location, addToFavorites}) => {
    location = {name: "Tel Aviv", temp: "38C"}
    return(
        <Wrapper>
            <City>
                <CityName>{location.name}</CityName>
                <Temperature>{location.temp}</Temperature>
            </City>
            <Button onClick={addToFavorites}>Add to Favorites</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const City = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const CityName = styled.div`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.smallTitle};
`

const Temperature = styled.div`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.text};
`

export default CurrentWeather