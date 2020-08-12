import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import allActions from '../redux/actions'

const CurrentConditions = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const {temp_metric, text} = useSelector(state => state.currentWeather);
    const location = useSelector(state => state.currentLocation);
    const favorites = useSelector(state => state.favorites);
    const dispatch  = useDispatch();

    const addToFavorites = () => {
        dispatch(allActions.favoritesActions.add(location))
    }

    useEffect(() => {
        setButtonDisabled(favorites.filter((item) => item.key === location.key).length === 1);
    },[favorites, location])

    return(
        <Wrapper>
            <Header>
                <City>
                    <CityName>{location.name}</CityName>
                    <Temperature>{`${temp_metric}° c`}</Temperature>
                </City>
                <Button disabled={buttonDisabled} onClick={addToFavorites}>Add to Favorites</Button>
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

export default CurrentConditions