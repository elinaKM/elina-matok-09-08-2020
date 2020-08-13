import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getAutoCompleteOptionsValues } from './../utils/customization'
import allActions from './../redux/actions/index.js'
import { getAutoComplete } from './../utils/apiCalls'
import debounce from './../utils/debounce'

toast.configure();

const SelectAutoComplete = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.currentLocation);

    const [searchString, setSearchString] = useState("");
    const [validString, setValidString] = useState(true);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const reg = /^[a-z]+$/i;
    const empty = /^\s+$|^$/gi;


    const setLocation = (location) => {
        dispatch(allActions.locationActions.setLocation(location));
    }

    const setResults = (str) =>
        getAutoComplete(str)
            .then((res) => setOptions(getAutoCompleteOptionsValues(res)))
            .catch(function(error) {
                setOpen(false);
                toast.error(`Oops! ${error}`);
            });

    useEffect(() => {
        setValidString(reg.test(searchString) || empty.test(searchString));
    }, [searchString]);

    useEffect(() => {
        if (searchString.length === 0 || !validString){
            setOpen(false);
        } else {
            debounce(setResults(searchString), 1000);
        }
    }, [searchString]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
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
                    label="Search for location"
                    variant="outlined"
                    helperText={!validString ? "Searching should be done in English letters only" : ""}
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