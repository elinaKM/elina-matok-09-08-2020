import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import { getWeekDay } from '../utils/customization'

const FiveDaysForecast = () => {
    const forcastArr = useSelector(state => state.fiveDaysForecast) || [];
    return(
        <Wrapper>
            {forcastArr.map((item, index) => <Card key={index} day={getWeekDay(item.date)} temp={item.temp} unit={item.unit}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

export default FiveDaysForecast