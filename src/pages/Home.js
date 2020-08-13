import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import allActions from './../redux/actions/index.js'
import Main from './../components/Main'
import Autocomplete from './../components/Autocomplete'
import { get5DaysWeather, getCurrentConditions, getAutoComplete } from './../utils/apiCalls'
import { get5ForecastValues, getCurrentConditionsValues } from './../utils/customization'

const Home = () => {
    const routerLocation = useLocation();
    const location = useSelector(state => state.currentLocation);
    const [origin, setOrigin] = useState(routerLocation.state ? routerLocation.state.currentLocation: location);

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const setCurrentConditions = () => {
        getCurrentConditions(location.key).then((res) => {
            dispatch(allActions.currentWeatherActions.setCurrentWeather(getCurrentConditionsValues(res[0])));
        }).then(set5DaysWeather());
    }
    
    const set5DaysWeather = () => {
        get5DaysWeather(location.key)
            .then((res) => {
                dispatch(allActions.fiveDaysForecastActions.setFiveDaysForecast(get5ForecastValues(res.DailyForecasts)));
            }).then(setLoading(false));
    }
    
    useEffect(() => {
        dispatch(allActions.locationActions.setLocation(origin));
    }, [origin]);

    //Commented out to save api calls. Uncomment in the end
    useEffect(() => {
        setCurrentConditions();
    }, [location]);

    return (
        <Wrapper>
            {/* <button onClick={()=> setCurrentConditions()}>fetch</button> */}
            <Autocomplete/>
            <Main loading={loading}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 5%;
`

export default Home