import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ROOT, FAVORITES } from './../constants/pathes'


const Header = () => (
    <Wrapper>
        <LogoLink to={ROOT}>
            Herolo Weather Task.
        </LogoLink>
        <NavList>
            <li>
                <StyledLink to={ROOT}>
                    Home
                </StyledLink>
            </li>
            <li>
                <StyledLink to={FAVORITES}>
                    Favorites
                </StyledLink>
            </li>
        </NavList>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(250,232,242, 0.5);
    padding: 10px;
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.border};
`

const LogoLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.smallTitle};
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.smallTitle};
    &:hover , :focus{
        color: ${props => props.theme.colors.primary};
    }
    margin-right: 20px;
`

export default Header