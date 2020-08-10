import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import allActions from './../redux/actions/index.js'
import Main from './../components/Main'

const Home = () => {

    const [mydata, setMydata] = useState([]);

    const API = 'http://api.accuweather.com/currentconditions/v1/215854.json'
    // const API = 'http://dataservice.accuweather.com/currentconditions/v1/';
    // const DEFAULT_QUERY = '215854';
    
    const doFetch = () => {
        fetch(API,
            {
                method: 'GET',
                headers: {
                    'apikey': 'GOyACs39myLzau6dS8FHBhBtJD6ofaBI',
                }
            })
            .then(response => response.json())
            .then(data => setMydata(data.hits));
    }
    console.log(mydata);

    return (
        <Wrapper>
            {/* Home Page:
            <button onClick={doFetch}>FETCH</button> */}
            <Main/>
        </Wrapper>
    )
}

// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux';
const Wrapper = styled.div`
`
export default Home