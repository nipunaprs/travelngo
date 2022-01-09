import React, {useState} from 'react'
import {Autocomplete } from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

function Header({setCoordinates}) {
    //Box is similar to div

    const classes = useStyles();
    const [autoComplete, setautoComplete] = useState(null);
    
    const onLoad = (autoC) => setautoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCoordinates({lat,lng});
    }

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                
                <Box display="block">
                    <Typography variant="h5" className={classes.title}>
                        Travel&Go!
                    </Typography>
                    <Typography variant="subtitle2" className={classes.title}>
                        Your one stop shop for all travel research
                    </Typography>
                </Box>
              
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search....' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    </Autocomplete> 
                </Box>
            </Toolbar>


        </AppBar>
        
    )
}

export default Header
