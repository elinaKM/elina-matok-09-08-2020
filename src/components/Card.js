import React from 'react'
import styled from 'styled-components'
import { CELCIUS } from '../constants/units'

const unit = CELCIUS;

const Card = ({ day, temp }) =>
    <Wrapper>
        <p>{day}</p>
        <p>{`${temp}°${unit}`}</p>
    </Wrapper>

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.card};
    background-color: ${props => props.theme.colors.card};
    margin: 10px;
    padding: 10px;
`

export default Card