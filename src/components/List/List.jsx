import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles'

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

        setElRefs(refs);
    }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restoran, Hotel, dan Tempat Wisata Disekitarmu</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
            <FormControl className={classes.formControl}>
                <InputLabel>Pilihan</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants" >Restoran</MenuItem>
                    <MenuItem value="hotels" >Hotel</MenuItem>
                    <MenuItem value="attractions" >Tempat Wisata</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0} >Semua</MenuItem>
                    <MenuItem value={3} >Diatas 3.0</MenuItem>
                    <MenuItem value={4} >Diatas 4.0</MenuItem>
                    <MenuItem value={4.5} >Diatas 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails 
                            place={place} 
                            selected={Number(childClicked) === i}
                            refProp={elRefs[i]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    );
}

export default List;