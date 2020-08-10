import React from 'react'
import styled from 'styled-components'
import CurrentWeather from './CurrentWeather.js'
import FiveDaysForecast from './FiveDaysForecast.js'

const Main = (props) => {
    const text = "Clouds and sun"; //need to get from upstears props
    return(
        <Wrapper>
            {/* //add loaging && */}
                <CurrentWeather/>
                <WeatherText>{text}</WeatherText>
                <FiveDaysForecast/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.card};
    margin: 5%;
    background-color: rgba(250,232,242, 0.5);
`

const WeatherText = styled.div`
    display: flex;
    justify-content: center;
    margin: 7% 0;
    font-size: ${props => props.theme.fontSizes.megaTitle};
`

export default Main