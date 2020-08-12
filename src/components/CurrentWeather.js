import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'

const CurrentWeather = ({addToFavorites}) => {
    const {temp_metric, text} = useSelector(state => state.currentWeather);
    const {name, key} = useSelector(state => state.currentLocation);
    return(
        <Wrapper>
            <Header>
                <City>
                    <CityName>{name}</CityName>
                    <Temperature>{`${temp_metric} C`}</Temperature>
                </City>
                <Button onClick={addToFavorites}>Add to Favorites</Button>
            </Header>
            <WeatherText>{text}</WeatherText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Header = styled.div`
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

const WeatherText = styled.div`
    display: flex;
    justify-content: center;
    margin: 6% 0;
    font-size: ${props => props.theme.fontSizes.megaTitle};
`

export default CurrentWeather