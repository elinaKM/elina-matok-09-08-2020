import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import { API_HOST, API_KEY } from './../constants/api'
import { getAutoCompleteOptionsValues } from './../utils/customization'
import allActions from './../redux/actions/index.js'


function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

const SelectAutoComplete = () => {

    const dispatch = useDispatch();
    const {name, key} = useSelector(state => state.currentLocation);

    const [searchString, setSearchString] = useState(name);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;


    const setLocation = (location) => {
        dispatch(allActions.locationActions.setLocation(location));
    }

    useEffect(() => {
        let active = true;
        let locations = [];

        if (!loading) {
            return undefined;
        }

        (async () => {
            //   const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            // let countries = await response.json();
            console.log(searchString);
            // if (searchString.length > 0) {
                const response = await fetch(`${API_HOST}locations/v1/cities/autocomplete?q=${searchString}&apikey=${API_KEY}`);
                let locations = await response.json();
                locations = getAutoCompleteOptionsValues(locations);
            // }
            if (active) {
                // setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
                setOptions(locations);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading, searchString]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    console.log(searchString);

    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ marginTop: "30px" }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, value) => {
                if (value) {
                    console.log(value);
                    setLocation(value);
                }
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}

            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={e => setSearchString(e.target.value)}
                    label="Location"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}

export default SelectAutoComplete