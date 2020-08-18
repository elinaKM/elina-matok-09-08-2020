import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import allActions from './../redux/actions/index.js'
import Main from './../components/Main'
import Autocomplete from './../components/Autocomplete'

const Home = () => {
    const routerLocation = useLocation();
    const location = useSelector(state => state.currentLocation);
    const currentConditions = useSelector(state => state.currentWeather);
    const fiveDaysForecast = useSelector(state => state.fiveDaysForecast);
    const [origin] = useState(routerLocation.state ? routerLocation.state.currentLocation: location);

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.locationActions.setLocation(origin));
    }, [origin]);

    useEffect(() => {
        dispatch(allActions.currentWeatherActions.setCurrentWeather(location.key));
    }, [location]);

    useEffect(() => {
        dispatch(allActions.fiveDaysForecastActions.setFiveDaysForecast(location.key));
    },[currentConditions]);

    useEffect(() => {
        setLoading(false);
    },[fiveDaysForecast]);

    return (
        <Wrapper>
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