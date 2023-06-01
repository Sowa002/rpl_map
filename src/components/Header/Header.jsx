import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC)

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({lat, lng })
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    <Button size="large" color='inherit' onClick={() => window.open('http://jalan-in-production.up.railway.app' , '_blank')}>
                     JALAN-IN
                    </Button>
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                       Enjoy Your Trip With Us
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default Header;