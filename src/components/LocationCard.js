import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from './Button'
import allActions from '../redux/actions'
import { getCurrentConditions } from './../utils/apiCalls'
import { getCurrentConditionsValues } from './../utils/customization'
import { ROOT } from './../constants/pathes'

const LocationCard = ({ name, itemKey }) => {

    const [loading, setLoading] = useState(true);
    const [conditions, setConditions] = useState({ temp_metric: "", text: "" });
    const dispatch = useDispatch();

    const onRemove = () => dispatch(allActions.favoritesActions.remove(itemKey));

    const setCurrentConditions = () => {
        getCurrentConditions(itemKey).then((res) => {
            setConditions(getCurrentConditionsValues(res[0]));
        }).then(setLoading(!loading));
    }
    
    // Commented out to save api calls! Uncomment in the end
    // useEffect(() => {
    //     setCurrentConditions();
    // }, []);

    return (
        <StyledLink to={{
            pathname: ROOT,
            state: {
                currentLocation: {
                        name: name,
                        key: itemKey
                }
            }
        }}>
            <Wrapper>
                <CityName>{name}</CityName>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {!loading ? <Details>{`${conditions.temp_metric}° c`}</Details> : null}
                {!loading ? <Details>{conditions.text}</Details> : null}
                <Button onClick={onRemove}>Remove</Button>
            </Wrapper>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.card};
    background-color: rgba(250,232,242, 0.5);
    margin: 10px;
    padding: 10px;
`

const CityName = styled.div`
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    margin-bottom: 15px;
`

const Details = styled.div`
    color: ${props => props.theme.colors.text};
    margin-bottom: 15px;
`

export default LocationCard