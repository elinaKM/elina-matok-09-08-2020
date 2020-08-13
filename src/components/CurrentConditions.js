import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import allActions from '../redux/actions'
import { CELCIUS } from '../constants/units'

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

    const unit = CELCIUS;

    return(
        <Wrapper>
            <Header>
                <City>
                    <CityName>{location.name}</CityName>
                    <Temperature>{temp_metric ? `${temp_metric}°${unit}` : `Loading...`}</Temperature>
                </City>
                <AddToFavorites disabled={buttonDisabled} onClick={addToFavorites}>Add to Favorites</AddToFavorites>
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
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
`

const CityName = styled.div`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.bigTitle};
    font-weight: bold;
`

const Temperature = styled.div`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.smallTitle};
    font-weight: bold;
`

const WeatherText = styled.div`
    display: flex;
    justify-content: center;
    margin: 4% 0;
    font-size: ${props => props.theme.fontSizes.megaTitle};
`

const AddToFavorites = styled(Button)`
    margin-right: 30px;
`

export default CurrentConditions