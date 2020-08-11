import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allActions from './../redux/actions/index.js'
import Main from './../components/Main'
import { get5DaysWeather, getCurrentConditions } from './../utils/apiCalls'
import { get5ForecastValues, getCurrentConditionsValues } from './../utils/customization'

const Home = () => {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const location = useSelector(state => state.currentLocation.key);

    const setCurrentConditions = () => {
        getCurrentConditions(location).then((res) => {
            dispatch(allActions.currentWeatherActions.setCurrentWeather(getCurrentConditionsValues(res[0])));
        }).then(set5DaysWeather());
    }
    
    const set5DaysWeather = () => {
        get5DaysWeather(location)
            .then((res) => {
                dispatch(allActions.fiveDaysForecastActions.setFiveDaysForecast(get5ForecastValues(res.DailyForecasts)));
            }).then(setLoading(false));
    }

    // useEffect(() => {
    //     setCurrentConditions();
    // }, []);

    return (
        <div>
            <button onClick={() => {
                setCurrentConditions();
            }}>FETCH</button>
            <Main loading={loading}/>
        </div>
    )
}

export default Home