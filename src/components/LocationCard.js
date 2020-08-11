import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const LocationCard = ({item, onRemove}) => {
    return (
        <Wrapper>
            <p>{item.title}</p>
            <p>{item.details1}</p>
            <p>{item.details2}</p>
            {onRemove && <Button onClick={item.onRemove}>Remove</Button>}
        </Wrapper>
    )
}

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

export default LocationCard