import React from 'react'
import styled from 'styled-components'

const NotFound = () => 
    <Wrapper>
        Page Not Found
    </Wrapper>

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-size: ${props => props.theme.fontSizes.subTitle};
`
export default NotFound