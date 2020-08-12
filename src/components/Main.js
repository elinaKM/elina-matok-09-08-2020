import React from 'react'
import styled from 'styled-components'
import CurrentConditions from './CurrentConditions.js'
import FiveDaysForecast from './FiveDaysForecast.js'

const Main = ({loading}) => {
    return(
        <Wrapper>
            {!loading &&
                <>
                    <CurrentConditions/>
                    <FiveDaysForecast/>
                </>
            }
            {loading && <WeatherText>Loading...</WeatherText>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.card};
    margin-top: 30px;
    background-color: rgba(250,232,242, 0.5);
`

const WeatherText = styled.div`
    display: flex;
    justify-content: center;
    margin: 7% 0;
    font-size: ${props => props.theme.fontSizes.megaTitle};
`

export default Main