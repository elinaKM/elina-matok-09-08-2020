import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allActions from './../redux/actions/index.js'
import Main from './../components/Main'
import Autocomplete from './../components/Autocomplete'
import { get5DaysWeather, getCurrentConditions, getAutoComplete } from './../utils/apiCalls'
import { get5ForecastValues, getCurrentConditionsValues } from './../utils/customization'

const Home = () => {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const locationKey = useSelector(state => state.currentLocation.key);
    const location = useSelector(state => state.currentLocation);
    const favorites = useSelector(state => state.favorites);

    const setCurrentConditions = () => {
        getCurrentConditions(locationKey).then((res) => {
            dispatch(allActions.currentWeatherActions.setCurrentWeather(getCurrentConditionsValues(res[0])));
        }).then(set5DaysWeather());
    }
    
    const set5DaysWeather = () => {
        get5DaysWeather(locationKey)
            .then((res) => {
                dispatch(allActions.fiveDaysForecastActions.setFiveDaysForecast(get5ForecastValues(res.DailyForecasts)));
            }).then(setLoading(false));
    }
    //Commented out to save api calls. Uncomment in the end
    // useEffect(() => {
    //     setCurrentConditions();
    // }, [locationKey]);

    return (
        <Wrapper>
            <button onClick={() => {
                setCurrentConditions();
            }}>Fetch</button>

            <button onClick={() => {
                console.log("The key is:" + locationKey);
                // setCurrentConditions();
                dispatch(allActions.locationActions.setLocation({key: "3431644", name: "Telanaipura"}));
            }}>set location to Telanaipura</button>
            
            <div>{location.name}</div>
            <div>{favorites.map((x) => x.name)}</div>
            
            {/* <Autocomplete/> */}
            
            <Main loading={false}/>
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